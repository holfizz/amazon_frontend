import { ProductDataFilters } from '@/interfaces/product.interface'

export interface IFiltersState {
	isFilterUpdated: boolean
	queryParams: ProductDataFilters
}

export interface IFiltersActionsPayload {
	key: keyof ProductDataFilters
	value: string
}
