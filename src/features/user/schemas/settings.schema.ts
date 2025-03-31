import { z } from 'zod'

export const SettingsSchema = z.object({
	name: z.string().min(1, { message: 'Name is required' }),
	email: z.string().email({ message: 'Invalid email' }),

	isTwoFactorEnabled: z.boolean()
})

export type TypeSettingsSchema = z.infer<typeof SettingsSchema>
