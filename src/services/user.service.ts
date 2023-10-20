import { instance } from '@/api/api.interceptor'
import { IFullUser, IUser, IUserData } from '@/interfaces/user.interface'
import { pathApiConstants } from '@/constants/api.constants'

export const UserService = {
	async getProfile() {
		return instance<IFullUser>({
			url: `${pathApiConstants.USERS}/profile`,
			method: 'GET',
		})
	},

	async create() {
		return instance<IUser[]>({
			url: pathApiConstants.USERS,
			method: 'POST',
		})
	},
	async updateProfile(data: IUserData) {
		return instance<IUser[]>({
			url: `${pathApiConstants.USERS}/profile`,
			method: 'PUT',
			data,
		})
	},
	async toggleFavorite(productId: string | number) {
		return instance<IUser[]>({
			url: `${pathApiConstants.USERS}/profile/favorites/${productId}`,
			method: 'PATCH',
		})
	},
}
