'use client'
import { FC, useState } from 'react'
import cls from './Auth.module.scss'
import Button from '@/ui/button/Button'
import Heading from '@/ui/heading/Heading'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IEmailPassword } from '@/store/user/user.interface'
import Loader from '@/ui/loader/Loader'
import Field from '@/ui/field/Field'
import { useAuthRedirect } from '@/app/auth/useAuthRedirect'
import { validEmail } from '@/app/auth/valid-email'

const AuthPage: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IEmailPassword>()

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') {
			login(data)
		} else {
			register(data)
		}
		reset()
	}
	return (
		<div className={cls.Auth}>
			<div className={cls.contentBlock}>
				<div className={cls.form}>
					<Heading fontSize={'24px'}>
						{type.charAt(0).toUpperCase() + type.slice(1)}
					</Heading>
					<form className={cls.formOriginal} onSubmit={handleSubmit(onSubmit)}>
						{isLoading && <Loader />}
						<Field
							placeholder={'Email'}
							{...formRegister('email', {
								required: 'Email is required',
								pattern: {
									value: validEmail,
									message: 'Please enter a valid email address',
								},
							})}
							error={errors.email?.message}
						></Field>
						<Field
							placeholder={'Password'}
							{...formRegister('password', {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should be 6 symbols',
								},
							})}
							type={'password'}
							error={errors.password?.message}
						></Field>
						<Button type={'submit'} variant={'light'}>
							Let`s go
						</Button>
					</form>
				</div>
				<div className={cls.changeFormBlock}>
					<div className={cls.blockAmazonTitle}>
						<Heading fontSize={'12px'}>
							Find everything love at{' '}
							<b className={cls.amazonTitle}>
								amazon the world's largest online marketplace
							</b>
						</Heading>
						<Heading className={cls.alreadyHaveAccountTitle} fontSize={'16px'}>
							{type === 'login'
								? `Don't have an account?`
								: 'Already you have an account?'}
						</Heading>
					</div>
					<div className={cls.changeFormBlockButton}>
						<Button
							variant={'light'}
							type={'button'}
							onClick={() => setType(type === 'login' ? 'register' : 'login')}
						>
							{type === 'login' ? 'register' : 'login'}
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AuthPage
