import { Title } from '@mantine/core';
import type { ComponentProps } from 'react';

export function FormHeader(props: ComponentProps<typeof Title>) {
  return <Title order={2} style={{ textAlign: 'center' }} {...props} />;
}
