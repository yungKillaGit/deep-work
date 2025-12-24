'use client';
import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { showError } from '~/shared/lib/notifications';
import { createClient } from '~/shared/lib/supabase/client';

export const SignOutButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      color="red"
      size="md"
      onClick={async () => {
        const client = createClient();
        const { error } = await client.auth.signOut();
        if (error) {
          showError(error.message);
        } else {
          router.push('/login');
        }
      }}
    >
      Sign Out
    </Button>
  );
};
