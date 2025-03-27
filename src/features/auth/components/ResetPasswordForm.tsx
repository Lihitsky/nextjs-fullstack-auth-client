'use client'

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

import { usePasswordResetMutation } from '../hooks'
import {
	LoginSchema,
	PasswordResetSchema,
	TypePasswordResetSchema
} from '../schemas'

import { AuthWrapper } from './AuthWrapper'

export function ResetPasswordForm() {
	const { theme } = useTheme()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
	const { reset, isLoadingReset } = usePasswordResetMutation()

	const form = useForm<TypePasswordResetSchema>({
		resolver: zodResolver(PasswordResetSchema),
		defaultValues: {
			email: ''
		}
	})

	const onSubmit = (data: TypePasswordResetSchema) => {
		if (recaptchaValue) {
			reset({ values: data, recaptcha: recaptchaValue })
		} else {
			toast.error('Please confirm that you are not a robot.')
		}
	}

	return (
		<AuthWrapper
			heading='Password reset'
			description='Enter your email address and we will send you a link to reset your password.'
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
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder='john@example.com'
										disabled={isLoadingReset}
										type='email'
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
					<Button type='submit' disabled={isLoadingReset}>
						Reset Password
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
