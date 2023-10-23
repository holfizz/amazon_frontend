import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

import Checkbox from '@/ui/checkbox/Checkbox'

import { useFilters } from '../../useFilters'

import { updateRatingsQuery } from './update-ratings-query'
import { RATING_VARIANTS } from '@/app/explorer/filters/ratings-group/ratings-variant.data'
import FilterWrapper from '@/app/explorer/filters/FilterWrapper/FilterWrapper'

const RatingGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWrapper title='Number of reviews'>
			{RATING_VARIANTS.map(rating => {
				console.log(queryParams.ratings)
				return (
					<Checkbox
						isChecked={queryParams.ratings?.includes(rating.toString())}
						onClick={() =>
							updateQueryParams(
								'ratings',
								updateRatingsQuery(queryParams.ratings, rating.toString()),
							)
						}
						key={rating + 10}
						className='mb-2 text-sm'
					>
						<Rating
							readonly
							initialValue={rating}
							SVGstyle={{
								display: 'inline-block',
							}}
							size={20}
							transition
						/>
					</Checkbox>
				)
			})}
		</FilterWrapper>
	)
}

export default RatingGroup
