'use client'
import { FC } from 'react'
import Heading from '@/ui/heading/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'
import { useAdminProducts } from '@/app/admin/products/useAdminProducts'

const Products: FC = () => {
	const { data, isFetching, mutate } = useAdminProducts()
	return (
		<div>
			<Heading fontSize={'24px'}>Products</Heading>
			<AdminList
				isLoading={isFetching}
				removeHandler={mutate}
				listItems={data}
			/>
		</div>
	)
}

export default Products
