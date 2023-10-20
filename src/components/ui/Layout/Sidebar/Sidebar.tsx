import React from 'react'
import cls from './Sidebar.module.scss'
import { useQuery } from '@tanstack/react-query'
import { CategoryService } from '@/services/category.service'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import Loader from '@/ui/loader/Loader'
import Link from 'next/link'
import { LuLogOut } from 'react-icons/lu'

const Sidebar = () => {
	const { data, isLoading } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data,
		},
	)

	const { user } = useAuth()

	const { logout } = useActions()

	return (
		<aside className={cls.sidebar}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<div className={cls.categoryItemsBlock}>
						<ul className={cls.categoryItemsUl}>
							{data?.map(category => (
								// <li
								// 	className={[
								// 		cls.categoryItem,
								// 		asPath === `/category/${category.slug}` &&
								// 			cls.categoryItemActive,
								// 	].join(' ')}
								// 	key={category.id}
								// >
								// 	{asPath === `/category/${category.slug}` && (
								// 		<div className={cls.activeElementLabel}></div>
								// 	)}
								// 	<div className={cls.inactiveElement}>
								// 		<Link href={`/category/${category.slug}`}>
								// 			{category.name}
								// 		</Link>
								// 	</div>
								// </li>
							))}
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
