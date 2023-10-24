'use client'
import { FC } from 'react'
import Heading from '@/ui/heading/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'
import { useAdminReviews } from '@/app/admin/reviews/useAdminReviews'

const Reviews: FC = () => {
	const { data, isFetching } = useAdminReviews()
	return (
		<div>
			<Heading fontSize={'24px'}>Reviews</Heading>
			<AdminList isLoading={isFetching} listItems={data} />
		</div>
	)
}

export default Reviews
