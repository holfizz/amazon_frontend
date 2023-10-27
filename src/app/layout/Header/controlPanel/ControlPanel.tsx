'use client'

import React, { FC } from 'react'
import cls from './ControlPanel.module.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import Link from 'next/link'
import Cart from '@/app/layout/Header/cart/Cart'
import HeaderProfile from '@/app/layout/Header/headerProfile/HeaderProfile'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'

const ControlPanel: FC = () => {
	const { user } = useAuth()

	const { isAdminPanel } = useIsAdminPanel()

	return (
		<div className={cls.controlPanel}>
			{user?.isAdmin && !isAdminPanel && (
				<Link href={'/admin'} className={cls.adminIcon}>
					<MdOutlineAdminPanelSettings />
				</Link>
			)}
			<Link href={'/favorites'} className={cls.favorites}>
				<AiOutlineHeart />
			</Link>
			<div className={cls.cart}>
				<Cart />
			</div>
			<div className={cls.profile}>
				<HeaderProfile />
			</div>
		</div>
	)
}

export default ControlPanel
