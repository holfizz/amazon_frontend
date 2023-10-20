'use client'
import { FC, PropsWithChildren } from 'react'
import Sidebar from '@/ui/Layout/Sidebar/Sidebar'
import Header from '@/ui/Layout/Header/Header'
import cls from './Layout.module.scss'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className={cls.Layout}>
			<Header />
			<div className={cls.sidebar}>
				<Sidebar />
				<main className={cls.main}>{children}</main>
			</div>
		</div>
	)
}
export default Layout
