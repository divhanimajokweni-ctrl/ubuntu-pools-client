import { Redis as UpstashRedis } from '@upstash/redis';
import Redis from 'ioredis';

let upstashClient: UpstashRedis | null = null;
let standardClient: Redis | null = null;

export function getRedis() {
  const standardUrl = process.env.storage_REDIS_URL;
  if (standardUrl) {
    if (!standardClient) {
      standardClient = new Redis(standardUrl);
    }
    return standardClient;
  }

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    if (!upstashClient) {
      upstashClient = new UpstashRedis({ url, token });
    }
    return upstashClient;
  }

  console.warn('Redis credentials missing. Caching disabled.');
  return null;
}

export async function cacheGet(key: string) {
  const client = getRedis();
  if (!client) return null;
  
  if (client instanceof Redis) {
    return await client.get(key);
  } else {
    return await client.get(key);
  }
}

export async function cacheSet(key: string, value: any, ex?: number) {
  const client = getRedis();
  if (!client) return null;
  
  const stringified = typeof value === 'string' ? value : JSON.stringify(value);

  if (client instanceof Redis) {
    if (ex) {
      return await client.set(key, stringified, 'EX', ex);
    }
    return await client.set(key, stringified);
  } else {
    return await client.set(key, stringified, { ex });
  }
}
