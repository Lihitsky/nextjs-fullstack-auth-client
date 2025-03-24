import { AuthWrapper } from './AuthWrapper'

export function RegisterForm() {
	return (
		<AuthWrapper
			heading='Registration'
			description='To sing in enter your email and password.'
			backBattonLabel='Back to login'
			backBattonHref='/auth/login'
			isShowSocial
		>
			Registre form
		</AuthWrapper>
	)
}
