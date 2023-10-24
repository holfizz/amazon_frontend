'use client'

import { IListItem } from '@/ui/admin/admin-list/AdminList.interface'
import { useRouter } from 'next/navigation'
import cls from './AdminActions.module.scss'
import button from '@/ui/button/Button'
import { RiDeleteRow, RiEdit2Line, RiExternalLinkLine } from 'react-icons/ri'

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
	removeHandler?: () => void
}
export default function AdminActions({
	editUrl,
	removeHandler,
	viewUrl,
}: IAdminActions) {
	const { push } = useRouter()
	return (
		<div className={cls.actions}>
			{viewUrl && (
				<button onClick={() => push(viewUrl)}>
					<RiExternalLinkLine />
				</button>
			)}

			{editUrl && (
				<button onClick={() => push(editUrl)}>
					<RiEdit2Line />
				</button>
			)}
			{removeHandler && (
				<button onClick={removeHandler}>
					<RiDeleteRow />
				</button>
			)}
		</div>
	)
}
