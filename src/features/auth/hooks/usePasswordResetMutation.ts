import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { toastMessageHandler } from '@/shared/utils'

import { TypePasswordResetSchema } from '../schemas/password-reset.schema'
import { passwordResetService } from '../services/password-reset.service'

export function usePasswordResetMutation() {
	const router = useRouter()

	const { mutate: reset, isPending: isLoadingReset } = useMutation({
		mutationKey: ['reset password'],
		mutationFn: ({
			values,
			recaptcha
		}: {
			values: TypePasswordResetSchema
			recaptcha: string
		}) => passwordResetService.reset(values, recaptcha),
		onSuccess(data: any) {
			toast.success('Check your email', {
				description:
					'On your email you will find a link to reset your password.'
			})
		},
		onError(error) {
			toastMessageHandler(error)
		}
	})

	return { reset, isLoadingReset }
}
