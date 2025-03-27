import { api } from '@/shared/api'

class VerificationService {
	public async NewVerification(token: string | null) {
		const response = await api.post(`auth/email-confirmation`, { token })
	}
}

export const verificationService = new VerificationService()
