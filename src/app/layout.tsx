import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { MainProvider } from '@/shared/providers'

import '../shared/styles/globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		absolute: 'Authorization Project',
		template: '%s | Authorization Project'
	},
	description: 'This is a fullstack project for authorization.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<MainProvider>
					<div className='relative flex min-h-screen flex-col'>
						<div className='flex h-screen w-full items-center justify-center px-4'>
							{children}
						</div>
					</div>
				</MainProvider>
			</body>
		</html>
	)
}
