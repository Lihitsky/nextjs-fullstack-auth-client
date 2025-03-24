import Link from 'next/link'

import { buttonVariants } from '@/shared/components/ui'
import { ToggleTheme } from '@/shared/components/ui/ToggleTheme'

export default function Home() {
	return (
		<div className='space-y-5 text-center'>
			<h1 className='text-4xl font-bold'>Home page</h1>
			<ToggleTheme />
			<Link href='/auth/login' className={buttonVariants()}>
				Sign in
			</Link>
		</div>
	)
}
