'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextInput } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { showError } from '~/shared/lib/notifications';
import { Form } from '~/shared/ui/form';
import { authLayoutStyles } from '~/widgets/auth-layout';
import { signInWithEmail } from '../model/actions';
import { loginFormSchema, type LoginFormValues } from '../model/form';

export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginFormSchema),
  });

  const handleSignIn = async (values: LoginFormValues) => {
    const { error } = await signInWithEmail(values);
    if (error) {
      showError(error.message);
    } else {
      router.push('/');
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleSignIn)} className={authLayoutStyles.form}>
      <Form.Header>Sign In to Your Account</Form.Header>

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
          Sign in
        </Button>
        <Button variant="outline" component={Link} href="/register">
          Sign up
        </Button>
      </Form.Actions>
    </Form>
  );
};
