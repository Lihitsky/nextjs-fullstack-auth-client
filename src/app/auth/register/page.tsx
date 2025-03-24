import { Metadata } from 'next'

import { RegisterForm } from '@/features/auth/components/RegisterForm'

export const metadata: Metadata = {
	title: 'Create an account',
	description: 'Create an account to access the application.'
}

export default function RegisterPage() {
	return <RegisterForm />
}
