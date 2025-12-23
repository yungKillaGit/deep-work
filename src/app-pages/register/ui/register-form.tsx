'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextInput } from '@mantine/core';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { showError, showSuccess } from '~/shared/lib/notifications';
import { Form } from '~/shared/ui/form';
import { authLayoutStyles } from '~/widgets/auth-layout';
import { signUpWithEmail } from '../model/actions';
import { registerFormSchema, type RegisterFormValues } from '../model/form';

export const RegisterForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: 'q79199467455@yandex.ru',
      password: 'admin1',
    },
    resolver: zodResolver(registerFormSchema),
  });

  const handleSignUp = async (values: RegisterFormValues) => {
    const { error } = await signUpWithEmail(values);
    if (error) {
      showError(error.message);
    } else {
      showSuccess('Account created successfully! Please check your email to verify your account.');
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleSignUp)} className={authLayoutStyles.form}>
      <Form.Header>Create an Account</Form.Header>

      <Form.Fields>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register('email')}
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          error={errors.password?.message}
          {...register('password')}
        />
      </Form.Fields>

      <Form.Actions>
        <Button type="submit" variant="filled" loading={isSubmitting}>
          Sign up
        </Button>
        <Button variant="outline" component={Link} href="/login">
          Sign in
        </Button>
      </Form.Actions>
    </Form>
  );
};
