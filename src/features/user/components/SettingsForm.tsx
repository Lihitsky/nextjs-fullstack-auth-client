'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Loading,
	Switch
} from '@/shared/components/ui'
import useProfile from '@/shared/hooks/useProfile'

import { useUpdateProfileMutation } from '../hooks/useUpdateProfileMutation'
import { SettingsSchema, TypeSettingsSchema } from '../schemas'

import { SettingsButton, UserButtonLoading } from './SettingsButton'

export function SettingsForm() {
	const { user, isLoadingProfile } = useProfile()
	const { update, isLoadingUpdate } = useUpdateProfileMutation()

	const form = useForm<TypeSettingsSchema>({
		resolver: zodResolver(SettingsSchema),
		values: {
			name: user?.displayName || '',
			email: user?.email || '',
			isTwoFactorEnabled: user?.isTwoFactorEnabled || false
		}
	})

	const onSubmit = (value: TypeSettingsSchema) => {
		update(value)
	}

	if (!user) return null

	return (
		<Card className='w-[400px]'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>Profile Settings</CardTitle>
				{isLoadingProfile ? (
					<UserButtonLoading />
				) : (
					<SettingsButton user={user} />
				)}
			</CardHeader>

			<CardContent>
				{isLoadingProfile ? (
					<Loading />
				) : (
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='grid gap-2 space-y-2'
						>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												placeholder='John Doe'
												disabled={isLoadingUpdate}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder='john@example.com'
												type='email'
												disabled={isLoadingUpdate}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='isTwoFactorEnabled'
								render={({ field }) => (
									<FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
										<div className='space-y-0.5'>
											<FormLabel>
												Two factor authentication
											</FormLabel>
											<FormDescription>
												Enable two factor authentication
												for your account
											</FormDescription>
										</div>
										<FormControl>
											<Switch
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<Button type='submit' disabled={isLoadingUpdate}>
								Save changes
							</Button>
						</form>
					</Form>
				)}
			</CardContent>
		</Card>
	)
}
