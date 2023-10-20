import { ICategory } from '@/interfaces/category.interface'
import { axiosClassic, instance } from '@/api/api.interceptor'
import { pathApiConstants } from '@/constants/api.constants'

export const CategoryService = {
	async getAll() {
		return axiosClassic<ICategory[]>({
			url: pathApiConstants.CATEGORIES,
			method: 'GET',
		})
	},

	async getById(id: string | number) {
		return instance<ICategory[]>({
			url: `${pathApiConstants.CATEGORIES}/${id}`,
			method: 'GET',
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic<ICategory>({
			url: `${pathApiConstants.CATEGORIES}/by-slug/${slug}`,
			method: 'GET',
		})
	},
	async create() {
		return instance<ICategory[]>({
			url: pathApiConstants.CATEGORIES,
			method: 'POST',
		})
	},
	async update(id: string | number, name: string) {
		return instance<ICategory[]>({
			url: `${pathApiConstants.CATEGORIES}/${id}`,
			method: 'PUT',
			data: { name },
		})
	},
	async delete(id: string | number) {
		return instance<ICategory[]>({
			url: `${pathApiConstants.CATEGORIES}/${id}`,
			method: 'DELETE',
		})
	},
}
