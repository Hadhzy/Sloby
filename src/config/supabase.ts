import { SupabaseClient, createClient } from '@supabase/supabase-js';

const supabaseUrl = process!.env!.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process!.env!.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase: SupabaseClient<any, 'public', any> | any = createClient(
  supabaseUrl,
  supabaseKey
);
