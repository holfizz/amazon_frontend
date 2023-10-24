import { useQuery } from '@tanstack/react-query'

import { getAdminUrl } from '@/config/url.config'

import { OrderService } from '@/services/order.service'
import { IListItem } from '@/ui/admin/admin-list/AdminList.interface'
import { formatDate } from '@/utlis/format-date'
import { convertPrice } from '@/utlis/convertPrice'

export const useAdminOrders = () => {
	const { data, isFetching } = useQuery(
		['get admin orders'],
		() => OrderService.getAll(),
		{
			select: ({ data }) =>
				data.map(
					(order): IListItem => ({
						id: order.id,
						editUrl: getAdminUrl(`/orders/edit/${order.id}`),
						items: [
							`# ${order.id}`,
							order.status,
							formatDate(order.createdAt),
							convertPrice(order.total),
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
