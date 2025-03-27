import { z } from 'zod'

export const PasswordNewSchema = z.object({
	password: z
		.string()
		.min(6, { message: 'Password must be at least 6 characters' })
})

export type TypePasswordNewSchema = z.infer<typeof PasswordNewSchema>
