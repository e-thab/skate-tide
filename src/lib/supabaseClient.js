import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://lfypyjrykohcvfnxetvw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmeXB5anJ5a29oY3ZmbnhldHZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1MDM3MTAsImV4cCI6MjAzMDA3OTcxMH0.ksrVxbjdWIilDl0I4kr6RGInsf_OpvV0rSXG43TMy3s')