'use client'

import React, { FC } from 'react'
import cls from './ControlPanel.module.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import Link from 'next/link'
import Cart from '@/app/Layout/Header/cart/Cart'
import HeaderProfile from '@/app/Layout/Header/headerProfile/HeaderProfile'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

const ControlPanel: FC<{ isAdmin?: boolean }> = ({ isAdmin }) => {
	return (
		<div className={cls.controlPanel}>
			{isAdmin && (
				<div className={cls.adminIcon}>
					<MdOutlineAdminPanelSettings />
				</div>
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
