import Image from 'next/image'
import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'
import { IReview } from '@/interfaces/review.interface'
import cls from './ReviewItem.module.scss'

const ReviewItem: FC<{ review: IReview }> = ({ review }) => {
	return (
		<div className={cls.reviewItem}>
			<div className='flex items-center mb-2'>
				<Image
					alt={review.user.name}
					src={review.user.avatarPath}
					width={40}
					height={40}
					className={cls.reviewImage}
				/>
				<span>{review.user.name}</span>
			</div>
			<Rating
				readonly
				initialValue={review.rating}
				SVGstyle={{
					display: 'inline-block',
				}}
				size={20}
				allowFraction
				transition
			/>
			<div>{review.text}</div>
		</div>
	)
}

export default ReviewItem
