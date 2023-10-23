import { FC } from 'react'
import PriceGroup from '@/app/explorer/filters/price-group/PriceGroup'
import CategoryGroup from '@/app/explorer/filters/category-group/CategoryGroup'
import RatingsGroup from '@/app/explorer/filters/ratings-group/RatingsGroup'

const Filters: FC = () => {
	return (
		<div>
			<PriceGroup />
			<CategoryGroup />
			<RatingsGroup />
		</div>
	)
}

export default Filters
