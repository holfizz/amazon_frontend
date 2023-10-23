import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	reviews: IReview[]
	images: string[]
	createdAt: string
	category: ICategory
}
export interface IProductData {
	name: string
	description: string
	price: number
	images: string[]
	category: ICategory
}
export interface ProductDataFilters {
	sort?: EnumProductSort | string
	searchTerm?: string
	page?: number
	perPage: number
	ratings?: string
	minPrice?: string
	maxPrice?: string
	categoryId?: string
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}

export type TypePaginationProducts = {
	length: number
	products: IProduct[]
}

export enum EnumProductSort {
	NEWEST = 'newest',
	OLDEST = 'oldest',
	HIGH_PRICE = 'high_price',
	LOW_PRICE = 'low_price',
}
export interface TypeParamsFilters {
	searchParams: ProductDataFilters
}
