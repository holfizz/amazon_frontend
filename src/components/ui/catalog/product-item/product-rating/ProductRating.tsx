import React, { FC, useState } from 'react'
import { IProduct } from '@/interfaces/product.interface'
import { Rating } from 'react-simple-star-rating'
import cls from './ProductRating.module.scss'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const [rating] = useState<number>(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length,
		) || 0,
	)

	return (
		<div>
			{!!product.reviews.length && (
				<span>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{
							display: 'inline-block',
						}}
						fillColor={'var(--primary'}
						size={18}
						allowHover
						transition
					/>
					<span style={{ color: 'var(--primary' }}>{rating}</span>{' '}
				</span>
			)}
			<span className={cls.productReviews}>
				({product.reviews.length} reviews)
			</span>
		</div>
	)
}

export default ProductRating
