import Link from 'next/link'
import { type PropsWithChildren } from 'react'

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'

import { AuthSocial } from './AuthSocial'

interface AuthWrapperProps {
	heading: string
	description?: string
	backBattonLabel?: string
	backBattonHref?: string
	isShowSocial?: boolean
}

export function AuthWrapper({
	children,
	heading,
	description,
	backBattonLabel,
	backBattonHref,
	isShowSocial = false
}: PropsWithChildren<AuthWrapperProps>) {
	return (
		<Card className='w-[400px]'>
			<CardHeader className='space-y-2'>
				<CardTitle>{heading}</CardTitle>
				{description && (
					<CardDescription>{description}</CardDescription>
				)}
			</CardHeader>
			<CardContent>
				{isShowSocial && <AuthSocial />}
				{children}
			</CardContent>
			<CardFooter>
				{backBattonLabel && backBattonHref && (
					<Button variant='link' className='w-full font-normal'>
						<Link href={backBattonHref}>{backBattonLabel}</Link>
					</Button>
				)}
			</CardFooter>
		</Card>
	)
}
