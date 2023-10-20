import { axiosClassic, instance } from '@/api/api.interceptor'
import {
	IProduct,
	IProductData,
	ProductDataFilters,
	TypePaginationProducts,
} from '@/interfaces/product.interface'
import { pathApiConstants } from '@/constants/api.constants'

export const ProductService = {
	async getAll(queryData = {} as ProductDataFilters) {
		const { data } = await axiosClassic<TypePaginationProducts>({
			url: pathApiConstants.PRODUCTS,
			method: 'GET',
			params: queryData,
		})
		return data
	},
	async getSimilar(productId: string | number) {
		return axiosClassic<IProduct[]>({
			url: `${pathApiConstants.PRODUCTS}/similar/${productId}`,
			method: 'GET',
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic<IProduct[]>({
			url: `${pathApiConstants.PRODUCTS}/by-slug/${slug}`,
			method: 'GET',
		})
	},
	async getByCategory(categorySlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${pathApiConstants.PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET',
		})
	},
	async getById(id: string | number) {
		return instance<IProduct[]>({
			url: `${pathApiConstants.PRODUCTS}/${id}`,
			method: 'GET',
		})
	},
	async create() {
		return instance<IProduct[]>({
			url: pathApiConstants.PRODUCTS,
			method: 'POST',
		})
	},
	async update(id: string | number, data: IProductData) {
		return instance<IProduct[]>({
			url: `${pathApiConstants.PRODUCTS}/${id}`,
			method: 'PUT',
			data,
		})
	},
	async delete(id: string | number) {
		return instance<IProduct[]>({
			url: `${pathApiConstants.PRODUCTS}/${id}`,
			method: 'DELETE',
		})
	},
}
