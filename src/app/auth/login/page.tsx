import { Metadata } from 'next'

import { LoginForm } from '@/features/auth/components'

export const metadata: Metadata = {
	title: 'Login to your account',
	description: 'Login to your account to access the application.'
}

export default function LoginPage() {
	return <LoginForm />
}
