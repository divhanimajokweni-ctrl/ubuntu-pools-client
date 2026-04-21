import pg from 'pg';

const { Pool } = pg;

let pool: pg.Pool | null = null;

export function getDb() {
  if (!pool) {
    const connectionString = 
      process.env.pools_POSTGRES_URL || 
      process.env.pools_POSTGRES_PRISMA_URL || 
      process.env.DATABASE_URL;

    if (!connectionString) {
      console.warn('Postgres connection string missing. Database operations disabled.');
      return null;
    }
    pool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false }
    });
  }
  return pool;
}

export async function query(text: string, params?: any[]) {
  const db = getDb();
  if (!db) return null;
  return await db.query(text, params);
}
