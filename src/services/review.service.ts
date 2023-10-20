import { axiosClassic, instance } from '@/api/api.interceptor'
import { IReview, IReviewData } from '@/interfaces/review.interface'
import { pathApiConstants } from '@/constants/api.constants'

export const ReviewService = {
	async getAll() {
		return axiosClassic<IReview[]>({
			url: pathApiConstants.REVIEWS,
			method: 'GET',
		})
	},

	async leave(productId: string | number, data: IReviewData) {
		return instance<IReview[]>({
			url: `${pathApiConstants.REVIEWS}/leave/${productId}`,
			method: 'POST',
			data,
		})
	},
	async getAverageByProduct(productId: string | number) {
		return axiosClassic<number>({
			url: `${pathApiConstants.REVIEWS}/average-by-product/${productId}`,
			method: 'GET',
		})
	},
}
