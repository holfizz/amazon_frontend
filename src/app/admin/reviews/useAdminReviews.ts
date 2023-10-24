import { useQuery } from '@tanstack/react-query'

import { ReviewService } from '@/services/review.service'
import { IListItem } from '@/ui/admin/admin-list/AdminList.interface'

export const useAdminReviews = () => {
	const { data, isFetching } = useQuery(
		['get admin reviews'],
		() => ReviewService.getAll(),
		{
			select: ({ data }) =>
				data.map(
					(review): IListItem => ({
						id: review.id,
						items: [
							Array.from({ length: review.rating })
								.map(() => '⭐️')
								.join(' '),
							review.user.name,
						],
					}),
				),
		},
	)

	return {
		data,
		isFetching,
	}
}
