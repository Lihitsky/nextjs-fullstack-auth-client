import { api } from '@/shared/api'

import { TypePasswordResetSchema } from '../schemas/password-reset.schema'
import { IUser } from '../types'

class PasswordResetService {
	public async reset(body: TypePasswordResetSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await api.post<IUser>(
			'auth/password-recovery/reset',
			body,
			{
				headers
			}
		)

		return response
	}
}

export const passwordResetService = new PasswordResetService()
