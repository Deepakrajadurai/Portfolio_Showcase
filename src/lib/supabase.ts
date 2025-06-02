
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rxlthbfmgmeiosyrfbyo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bHRoYmZtZ21laW9zeXJmYnlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NjUyMjUsImV4cCI6MjA2NDQ0MTIyNX0.Nf0Tw8ahS0MqqoTo-6WJ0uKhWY5O00ehnbxReIoLU6U'

export const supabase = createClient(supabaseUrl, supabaseKey)
