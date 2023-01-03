import { createClient } from "@supabase/supabase-js";


const {NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY} = process.env
console.log(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_URL)

export default createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)