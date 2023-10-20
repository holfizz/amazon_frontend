import React from 'react'
import cls from './Header.module.scss'
import Image from 'next/image'
import Logo from '../../../../assets/big_logo-white.png'
import Search from '@/ui/Layout/Header/search/Search'
import ControlPanel from '@/ui/Layout/Header/controlPanel/ControlPanel'
import Link from 'next/link'

const Header = () => {
	return (
		<header className={cls.header}>
			<Link href={'/'} className={cls.headerBlockLogo}>
				<Image width={150} alt={'logo_amazon'} src={Logo} />
			</Link>
			<div className={cls.searchBlock}>
				<Search></Search>
			</div>
			<div className={cls.controlBlock}>
				<ControlPanel />
			</div>
		</header>
	)
}

export default Header
