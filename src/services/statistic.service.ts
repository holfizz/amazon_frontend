import { axiosClassic } from '@/api/api.interceptor'
import { pathApiConstants } from '@/constants/api.constants'
import { IStatistics } from '@/interfaces/statistics.interface'

export const StatisticService = {
	async getAll() {
		return axiosClassic<IStatistics[]>({
			url: `${pathApiConstants.STATISTICS}/main`,
			method: 'GET',
		})
	},
}
