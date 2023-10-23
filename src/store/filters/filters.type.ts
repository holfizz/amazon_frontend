import { ProductDataFilters } from '@/interfaces/product.interface'

export interface IFiltersState {
	isFilterUpdated: boolean
	queryParams: ProductDataFilters | never
}

export interface IFiltersActionsPayload {
	key: keyof ProductDataFilters
	value: string
}
