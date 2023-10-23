import { instance } from '@/api/api.interceptor'
import { pathApiConstants } from '@/constants/api.constants'
import { IStatistics } from '@/interfaces/statistics.interface'

export const StatisticsService = {
	async getMain() {
		return instance<IStatistics[]>({
			url: `${pathApiConstants.STATISTICS}/main`,
			method: 'GET',
		})
	},
}
