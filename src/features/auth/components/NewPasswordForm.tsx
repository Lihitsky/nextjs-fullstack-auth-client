import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/shared/components/ui'

import { usePasswordNewMutation } from '../hooks'
import { PasswordNewSchema, TypePasswordNewSchema } from '../schemas'

import { AuthWrapper } from './AuthWrapper'

export function NewPasswordForm() {
	const { theme } = useTheme()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
	const { newPassword, isLoadingNewPassword } = usePasswordNewMutation()

	const form = useForm<TypePasswordNewSchema>({
		resolver: zodResolver(PasswordNewSchema),
		defaultValues: {
			password: ''
		}
	})

	const onSubmit = (data: TypePasswordNewSchema) => {
		if (recaptchaValue) {
			newPassword({ values: data, recaptcha: recaptchaValue })
		} else {
			toast.error('Please confirm that you are not a robot.')
		}
	}

	return (
		<AuthWrapper
			heading='New password'
			description='Think of a new password and we will send you a link to reset your password.'
			backBattonLabel='Back to login'
			backBattonHref='/auth/login'
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-2 space-y-2'
				>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>New password</FormLabel>
								<FormControl>
									<Input
										placeholder='******'
										disabled={isLoadingNewPassword}
										type='password'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className='flex justify-center'>
						<ReCAPTCHA
							sitekey={
								process.env.GOOGLE_RECAPTCHA_SITE_KEY as string
							}
							onChange={setRecaptchaValue}
							theme={theme === 'light' ? 'light' : 'dark'}
						/>
					</div>
					<Button type='submit' disabled={isLoadingNewPassword}>
						Submit
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
