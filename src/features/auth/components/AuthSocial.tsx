'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FaGoogle } from 'react-icons/fa'

import { Button } from '@/shared/components/ui'

import { authService } from '../services'

export function AuthSocial() {
	const router = useRouter()

	const { mutateAsync } = useMutation({
		mutationKey: ['login with google'],
		mutationFn: async (provider: 'google') => {
			return await authService.oauthByProvider(provider)
		}
	})

	const handleSubmit = async (provider: 'google') => {
		const response = await mutateAsync(provider)

		if (response) {
			router.push(response.url)
		}
	}

	return (
		<>
			<div className='py-2'>
				<Button
					variant='outline'
					onClick={() => handleSubmit('google')}
					className='w-full'
				>
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
