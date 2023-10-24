'use client'

import { IListItem } from '@/ui/admin/admin-list/AdminList.interface'
import Loader from '@/ui/loader/Loader'
import cls from './AdminList.module.scss'
import AdminListItem from '@/ui/admin/admin-list/AdminListItem'

interface IAdminList {
	listItems?: IListItem[]
	isLoading: boolean
	removeHandler?: (id: number) => void
}

export default function AdminList({
	isLoading,
	listItems,
	removeHandler,
}: IAdminList) {
	return (
		<div>
			{isLoading ? (
				<Loader />
			) : listItems?.length ? (
				listItems.map(listItem => (
					<AdminListItem
						key={listItem.id}
						listItem={listItem}
						removeHandler={
							removeHandler ? () => removeHandler(listItem.id) : undefined
						}
					/>
				))
			) : (
				<div className={cls.notFound}></div>
			)}
		</div>
	)
}
