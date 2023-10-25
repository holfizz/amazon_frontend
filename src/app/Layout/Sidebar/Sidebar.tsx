'use client'
import React from 'react'
import cls from './Sidebar.module.scss'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import Loader from '@/ui/loader/Loader'
import Link from 'next/link'
import { LuLogOut } from 'react-icons/lu'
import { usePathname } from 'next/navigation'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { useCategories } from '@/hooks/queries/useCategories'
import { ADMIN_MANU } from '@/app/Layout/Sidebar/admin-menu-data'
import { convertToMenuItems } from '@/app/Layout/Sidebar/convert-to-menu-items'

const Sidebar = () => {
	const { data, isLoading } = useCategories()
	const asPath = usePathname()

	const { user } = useAuth()

	const { logout } = useActions()

	const { isAdminPanel, pathname } = useIsAdminPanel()
	return (
		<aside className={cls.sidebar}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<div className={cls.categoryItemsBlock}>
						<ul className={cls.categoryItemsUl}>
							{(isAdminPanel ? ADMIN_MANU : convertToMenuItems(data))?.map(
								item => {
									return (
										<li
											className={[
												cls.categoryItem,
												asPath == item.href && cls.categoryItemActive,
											].join(' ')}
											key={item.href}
										>
											{asPath === item.href && (
												<div className={cls.activeElementLabel}></div>
											)}
											<div className={cls.inactiveElement}>
												<Link href={item.href}>{item.label}</Link>
											</div>
										</li>
									)
								},
							)}
						</ul>
					</div>
				</>
			)}
			{!!user && (
				<div onClick={logout} className={cls.logout}>
					<LuLogOut />
					Logout
				</div>
			)}
		</aside>
	)
}

export default Sidebar
