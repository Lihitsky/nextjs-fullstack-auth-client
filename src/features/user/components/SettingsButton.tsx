'use client'

import { LucideLogOut } from 'lucide-react'

import { IUser } from '@/features/auth/types'

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	Skeleton
} from '@/shared/components/ui'

import useLogoutMutation from '../hooks/useLogoutMutation'

interface UserButtonProps {
	user: IUser
}

export function SettingsButton({ user }: UserButtonProps) {
	const { logout, isLoadingLogout } = useLogoutMutation()

	if (!user) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src={user.picture} />
					<AvatarFallback>
						{user.displayName.slice(0, 1)}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-40' align='end'>
				<DropdownMenuItem
					disabled={isLoadingLogout}
					onClick={() => logout()}
				>
					<LucideLogOut className='mr-2 size-4' />
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export function UserButtonLoading() {
	return <Skeleton className='h-10 w-10 rounded-full' />
}
