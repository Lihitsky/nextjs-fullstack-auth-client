import { Metadata } from 'next'

import { NewPasswordForm } from '@/features/auth/components'

const metadata: Metadata = {
	title: 'New password',
	description: 'New password to access the application.'
}

export default function NewPasswordPage() {
	return <NewPasswordForm />
}
