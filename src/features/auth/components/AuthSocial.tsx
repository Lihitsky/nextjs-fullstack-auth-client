import { FaGoogle } from 'react-icons/fa'

import { Button } from '@/shared/components/ui'

export function AuthSocial() {
	return (
		<>
			<div className='py-2'>
				<Button variant='outline' className='w-full'>
					<FaGoogle className='mr-2 size-4' />
					Google
				</Button>
			</div>
			<div className='relative mb-2 space-y-4'>
				<div className='absolute inset-0 top-2 flex items-center'>
					<span className='w-full border-t' />
				</div>
				<div className='relative flex justify-center text-xs uppercase'>
					<span className='bg-background text-muted-foreground px-2'>
						Or
					</span>
				</div>
			</div>
		</>
	)
}
