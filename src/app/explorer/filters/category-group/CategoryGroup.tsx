import { FC } from 'react'
import { useFilters } from '@/app/explorer/useFilters'
import { useCategories } from '@/hooks/queries/useCategories'
import Loader from '@/ui/loader/Loader'
import Checkbox from '@/ui/checkbox/Checkbox'
import FilterWrapper from '@/app/explorer/filters/FilterWrapper/FilterWrapper'

const CategoryGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	const { data, isLoading } = useCategories()
	return (
		<FilterWrapper title='Category'>
			{isLoading ? (
				<Loader />
			) : data?.length ? (
				data.map(category => {
					const isChecked = queryParams.categoryId === category.id.toString()
					return (
						<Checkbox
							isChecked={isChecked}
							onClick={() =>
								updateQueryParams(
									'categoryId',
									isChecked ? '' : category.id.toString(),
								)
							}
							key={category.id}
						>
							{category.name}
						</Checkbox>
					)
				})
			) : (
				<p>Categories not found!</p>
			)}
		</FilterWrapper>
	)
}

export default CategoryGroup
