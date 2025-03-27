import { z } from 'zod'

export const PasswordResetSchema = z.object({
	email: z.string().email({ message: 'Invalid email' })
})

export type TypePasswordResetSchema = z.infer<typeof PasswordResetSchema>
