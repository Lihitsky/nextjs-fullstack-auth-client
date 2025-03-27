import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

import { toastMessageHandler } from '@/shared/utils'

import { TypePasswordNewSchema } from '../schemas'
import { passwordResetService } from '../services/password-reset.service'

export function usePasswordNewMutation() {
	const router = useRouter()
	const search = useSearchParams()

	const token = search.get('token')

	const { mutate: newPassword, isPending: isLoadingNewPassword } =
		useMutation({
			mutationKey: ['new password'],
			mutationFn: ({
				values,
				recaptcha
			}: {
				values: TypePasswordNewSchema
				recaptcha: string
			}) => passwordResetService.new(values, token, recaptcha),
			onSuccess() {
				toast.success('Password successfully changed', {
					description: 'Now you can log in with your new password.'
				})

				router.push('/auth/login')
			},
			onError(error) {
				toastMessageHandler(error)
			}
		})

	return { newPassword, isLoadingNewPassword }
}
