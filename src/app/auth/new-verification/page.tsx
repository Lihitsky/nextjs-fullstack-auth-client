import { Metadata } from 'next'

import NewVerificationForm from '@/features/auth/components/NewVerificationForm'

export const metadata: Metadata = {
	title: 'New verification',
	description: 'New verification to access the application.'
}

export default function NewVerificationPage() {
	return <NewVerificationForm />
}
