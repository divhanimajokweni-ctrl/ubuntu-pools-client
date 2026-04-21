import { createClient } from '@supabase/supabase-js';

let supabase: any = null;

export function getSupabase() {
  if (!supabase) {
    const url = process.env.pools_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const anonKey = process.env.pools_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

    if (!url || !anonKey) {
      console.warn('Supabase credentials missing. Supabase services disabled.');
      return null;
    }

    supabase = createClient(url, anonKey);
  }
  return supabase;
}
