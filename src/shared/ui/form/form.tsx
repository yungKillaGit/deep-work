import { Stack } from '@mantine/core';
import type { ComponentProps } from 'react';
import { FormActions } from './form-actions';
import { FormFields } from './form-fields';
import { FormHeader } from './form-header';

export function Form(props: ComponentProps<typeof Stack>) {
  return <Stack component="form" style={{ gap: '36px' }} {...props} />;
}

Form.Actions = FormActions;
Form.Fields = FormFields;
Form.Header = FormHeader;
