import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/interfaces/order.interface'
import { pathApiConstants } from '@/constants/api.constants'

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: pathApiConstants.ORDERS,
			method: 'GET',
		})
	},
	place(param: {items: {quantity: number; productId: number; price: number}[]}) {
		return Promise.resolve({})
	},
}
