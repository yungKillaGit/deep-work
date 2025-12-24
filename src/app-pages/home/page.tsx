import { Container, Paper, Stack, Text, Title } from '@mantine/core';
import { SignOutButton } from '~/features/sign-out';
import { Timer } from '~/shared/ui/timer';

const targetDurationInMinutes = 240;

export function HomePage() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="xl">
        <Stack gap="xs" align="center">
          <Title order={1}>Deep Work Tracker</Title>
          <Text c="dimmed">Focus on what matters</Text>
        </Stack>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Stack gap="lg">
            <Timer duration={60} />
          </Stack>
        </Paper>

        <Paper shadow="sm" p="md" radius="md" withBorder>
          <Stack gap="xs">
            <Text size="sm" fw={500}>
              {`Today's Focus Time`}
            </Text>
            <Text size="xl" fw={700}>
              0 / {targetDurationInMinutes} minutes
            </Text>
          </Stack>
        </Paper>

        <SignOutButton />
      </Stack>
    </Container>
  );
}
