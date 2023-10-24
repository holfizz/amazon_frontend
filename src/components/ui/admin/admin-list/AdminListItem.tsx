'use client'

import { IAdminListItem } from '@/ui/admin/admin-list/AdminList.interface'
import cls from './AdminList.module.scss'
import AdminActions from '@/ui/admin/admin-list/admin-actions/AdminActions'

export default function AdminListItem({
	removeHandler,
	listItem,
}: IAdminListItem) {
	return (
		<div className={cls.item}>
			{listItem.items.map(value => (
				<div key={value}>{value}</div>
			))}
			<AdminActions
				viewUrl={listItem.viewUrl}
				editUrl={listItem.editUrl}
				removeHandler={removeHandler}
			/>
		</div>
	)
}
