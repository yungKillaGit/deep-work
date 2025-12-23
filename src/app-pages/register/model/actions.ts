'use server';
import { createClient } from '~/shared/lib/supabase/server';
import type { RegisterFormValues } from './form';

export async function signUpWithEmail(values: RegisterFormValues) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp(values);
  return { data, error };
}
