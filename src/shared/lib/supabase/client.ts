import { createBrowserClient } from '@supabase/ssr';
import { supabasePublishableKey, supabaseUrl } from '~/shared/config/env-config';

export function createClient() {
  return createBrowserClient(supabaseUrl!, supabasePublishableKey!);
}
