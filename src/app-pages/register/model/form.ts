import { z } from 'zod';

export const registerFormSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export type RegisterFormValues = z.infer<typeof registerFormSchema>;
