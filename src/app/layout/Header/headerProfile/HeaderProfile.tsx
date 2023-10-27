'use client'

import React from 'react'
import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'
import cls from './HeaderProfile.module.scss'
import { useAuth } from '@/hooks/useAuth'
import { PiSignInBold } from 'react-icons/pi'
import Link from 'next/link'

const HeaderProfile = () => {
	const { profile } = useProfile()
	const { user } = useAuth()
	return (
		<div>
			{!!user && (
				<div className={cls.profileBlock}>
					<Image
						className={cls.imageProfile}
						width={43}
						height={43}
						src={profile?.avatarPath as string}
						alt={profile?.name as string}
					/>
				</div>
			)}
			{!user && (
				<div className={cls.singIn}>
					<Link href={'/auth'}>
						Sign In <PiSignInBold />
					</Link>
				</div>
			)}
		</div>
	)
}

export default HeaderProfile
