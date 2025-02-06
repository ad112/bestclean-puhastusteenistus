
import { createClient } from '@supabase/supabase-js';

// These values are automatically injected by the Lovable platform
const supabaseUrl = 'https://zujmkpqfkltazxpqzypn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1am1rcHFma2x0YXp4cHF6eXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyOTA1NzAsImV4cCI6MjAyMzg2NjU3MH0.jIOJx3r2s_xGvY2Y2o8LySBLiOmZjFE4EQCIWKOhLEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
