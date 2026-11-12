import { createBrowserClient } from '@supabase/ssr';

// Used inside Client Components (files that start with 'use client').
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
