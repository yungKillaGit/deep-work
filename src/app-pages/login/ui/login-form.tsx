'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Box, Button, Stack, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { signInWithEmail } from '../model/actions';
import { loginFormSchema, type LoginFormValues } from '../model/form';

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
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
      setError('root.serverError', { message: error.message });
    }
  };

  return (
    <Box
      style={{
        width: '400px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
        padding: '24px',
        color: '#ffffff',
      }}
      bg="gray.9"
    >
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Stack align="center" gap="lg">
          <TextInput
            label="Email"
            placeholder="Enter your email"
            style={{
              width: '100%',
            }}
            error={errors.email?.message}
            {...register('email')}
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            style={{
              width: '100%',
            }}
            error={errors.password?.message}
            {...register('password')}
          />
          {errors.root?.serverError?.message && (
            <Alert color="red" variant="filled">
              {errors.root.serverError.message}
            </Alert>
          )}
          <Button type="submit" variant="filled" fullWidth>
            Sign in
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
