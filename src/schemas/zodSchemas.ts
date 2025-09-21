import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
});

export const SignupSchema = z.object({
    fullName: z.string().min(1),
    email: z.email(),
    password: z.string().min(6),
    phoneNumber: z.string().min(10).max(15),
    companyName: z.string().optional(),
    isAgency: z.boolean(),
});