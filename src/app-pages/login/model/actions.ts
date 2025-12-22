import { createClient } from '~/shared/lib/supabase/server';
import type { LoginFormValues } from './form';

export async function signInWithEmail(values: LoginFormValues) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword(values);
  return { data, error };
}
