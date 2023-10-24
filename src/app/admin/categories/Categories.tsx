'use client'
import { FC } from 'react'
import Heading from '@/ui/heading/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'
import { useAdminCategories } from '@/app/admin/categories/useAdminCategories'

const Categories: FC = () => {
	const { data, isFetching, mutate } = useAdminCategories()

	return (
		<>
			<Heading fontSize={'24px'}>Categories</Heading>
			<AdminList
				isLoading={isFetching}
				listItems={data}
				removeHandler={mutate}
			/>
		</>
	)
}

export default Categories
