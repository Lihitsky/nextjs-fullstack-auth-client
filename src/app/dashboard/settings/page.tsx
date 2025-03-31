import { Metadata } from 'next'

import { SettingsForm } from '@/features/user/components'

export const metadata: Metadata = {
	title: 'Profile Settings',
	description: 'Profile Settings to access the application.'
}

export default function SettingsPage() {
	return <SettingsForm />
}
