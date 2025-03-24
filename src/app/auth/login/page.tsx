import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login to your account',
	description: 'Login to your account to access the application.'
}

export default function LoginPage() {
	return (
		<div className='space-y-5 text-center'>
			<h1 className='text-4xl font-bold'>Login to your account</h1>
		</div>
	)
}
