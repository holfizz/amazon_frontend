'use client'
import { FC } from 'react'
import Heading from '@/ui/heading/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'
import { useAdminOrders } from '@/app/admin/orders/useAdminOrders'

const Orders: FC = () => {
	const { data, isFetching } = useAdminOrders()
	return (
		<>
			<Heading fontSize={'24px'}>Orders</Heading>
			<AdminList isLoading={isFetching} listItems={data} />
		</>
	)
}

export default Orders
