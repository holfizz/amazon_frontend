'use client'

import React from 'react'
import cls from './Header.module.scss'
import Image from 'next/image'
import Logo from '@/assets/big_logo-white.png'
import Link from 'next/link'
import Search from '@/app/layout/Header/search/Search'
import ControlPanel from '@/app/layout/Header/controlPanel/ControlPanel'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import Heading from '@/ui/heading/Heading'

const Header = () => {
	const { isAdminPanel } = useIsAdminPanel()

	return (
		<div className={cls.headerBlock}>
			<header className={cls.header}>
				<Link href={'/'} className={cls.headerBlockLogo}>
					{isAdminPanel ? (
						<Heading className={cls.adminPanel_heading} fontSize={'30px'}>
							ADMIN PANEL
						</Heading>
					) : (
						<Image width={150} alt={'logo_amazon'} src={Logo} />
					)}
				</Link>
				<div className={cls.searchBlock}>
					<Search />
				</div>
				<div className={cls.controlBlock}>
					<ControlPanel />
				</div>
			</header>
		</div>
	)
}

export default Header
