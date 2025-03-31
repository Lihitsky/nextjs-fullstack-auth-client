import { useQuery } from '@tanstack/react-query'

import { userService } from '@/features/user/sevices'

export default function useProfile() {
	const { data: user, isLoading: isLoadingProfile } = useQuery({
		queryKey: ['profile'],
		queryFn: async () => userService.findProfile()
	})

	return { user, isLoadingProfile }
}
