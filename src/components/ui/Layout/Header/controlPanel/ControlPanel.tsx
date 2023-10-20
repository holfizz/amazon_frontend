import React, { FC } from 'react'
import cls from './ControlPanel.module.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import Link from 'next/link'
import Cart from '@/ui/Layout/Header/cart/Cart'
import HeaderProfile from '@/ui/Layout/Header/headerProfile/HeaderProfile'

const ControlPanel: FC = () => {
	return (
		<div className={cls.controlPanel}>
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
