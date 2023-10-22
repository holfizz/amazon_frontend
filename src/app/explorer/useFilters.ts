import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useEffect } from 'react'
import { ProductDataFilters } from '@/interfaces/product.interface'

export const useFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { updateQueryParam } = useActions()
	const { replace } = useRouter()

	const { queryParams, isFilterUpdated } = useTypedSelector(
		state => state.filters,
	)
	useEffect(() => {
		searchParams.forEach((value, key) => {
			updateQueryParam({
				key: key as keyof ProductDataFilters,
				value,
			})
		})
	}, [])
}
