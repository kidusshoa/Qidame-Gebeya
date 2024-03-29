import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://uxrdlbdxrydalxkennxm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4cmRsYmR4cnlkYWx4a2VubnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2MDA0MTEsImV4cCI6MjAyNjE3NjQxMX0.DiFqa1ygZAWZO07X4EBVWmp9LxG6QwjmUNX_LYj4MbA"
);
