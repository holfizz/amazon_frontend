import { instance } from '@/api/api.interceptor'
import { IPaymentResponse } from '@/interfaces/payment.interface'
import { pathApiConstants } from '@/constants/api.constants'

export const PaymentService = {
	async createPayment(amount: number) {
		const { data } = await instance.post<IPaymentResponse>(
			pathApiConstants.PAYMENT,
			{
				amount,
			},
		)
	},
}
