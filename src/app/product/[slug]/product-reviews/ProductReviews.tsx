import { FC, useState } from 'react'
import { IReview } from '@/interfaces/review.interface'
import { useAuth } from '@/hooks/useAuth'
import Heading from '@/ui/heading/Heading'
import Button from '@/ui/button/Button'
import ReviewItem from './ReviewItem/ReviewItem'
import cls from './ProductReviews.module.scss'
import Modal from '@/ui/modal/Modal'
import LeaveReviewForm from './LeaveReviewForm/LeaveReviewForm'

interface IProductReviews {
	reviews: IReview[]
	productId: number
}

const ProductReviews: FC<IProductReviews> = ({ reviews, productId }) => {
	const [isModalOpen, setModalOpen] = useState(false)
	const { user } = useAuth()

	if (!reviews.length) return null
	return (
		<section id={'review'}>
			<div>
				<Heading fontSize={'24px'}>Reviews:</Heading>
				<div className={cls.leaveReviewButton}>
					{user && (
						<Button variant={'white'} onClick={() => setModalOpen(true)}>
							Leave a review
						</Button>
					)}
				</div>
			</div>
			{user && (
				<Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)}>
					<LeaveReviewForm productId={productId} />
				</Modal>
			)}
			<div className={cls.productsReviews}>
				{reviews.map(review => (
					<ReviewItem key={review.id} review={review} />
				))}
			</div>
		</section>
	)
}
export default ProductReviews
