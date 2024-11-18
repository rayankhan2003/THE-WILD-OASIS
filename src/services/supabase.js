import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://iuhuayvalrrjprhiwigx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1aHVheXZhbHJyanByaGl3aWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NjkzNDgsImV4cCI6MjA0NzE0NTM0OH0.ofvXng9IK9LVcTEPUhKiJBiAww9fwI3E-jOIc6-IzhI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
