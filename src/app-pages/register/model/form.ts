import { z } from 'zod';

export const registerFormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(6),
});

export type RegisterFormValues = z.infer<typeof registerFormSchema>;
