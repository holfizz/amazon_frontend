import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IReviewFields } from '@/app/product/[slug]/product-reviews/review-fields.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ReviewService } from '@/services/review.service'
import Heading from '@/ui/heading/Heading'
import Loader from '@/ui/loader/Loader'
import { Rating } from 'react-simple-star-rating'
import cls from './LeaveReviewForm.module.scss'
import Button from '@/ui/button/Button'

const LeaveReviewForm: FC<{ productId: number }> = ({ productId }) => {
	const {
		reset,
		handleSubmit,
		control,
		register: formRegister,
		formState: { errors },
	} = useForm<IReviewFields>({
		mode: 'onChange',
	})

	const queryClient = useQueryClient()

	const { mutate, isSuccess, isLoading } = useMutation(
		['leave review'],
		(data: IReviewFields) => ReviewService.leave(productId, data),
		{
			onSuccess(data) {
				queryClient.resetQueries(['get product', productId])
			},
		},
	)
	const onSubmit: SubmitHandler<IReviewFields> = data => {
		mutate(data)
		reset()
	}
	if (isSuccess) return <div>✅ Review successfully published!</div>
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Heading fontSize={'24px'}>Leave a review</Heading>
				{isLoading ? (
					<Loader />
				) : (
					<div>
						<Controller
							control={control}
							name={'rating'}
							render={({ field: { onChange, value } }) => (
								<Rating
									onClick={onChange}
									initialValue={value}
									SVGstyle={{ display: 'inline-block' }}
									size={20}
									transition
								/>
							)}
							rules={{
								required: 'Rating is required',
							}}
						/>
						<textarea
							{...formRegister('text', {
								required: 'Text is required',
							})}
							placeholder={'Your text here...'}
							className={cls.ratingForm}
						/>
						{Object.entries(errors) && (
							<ul className={cls.reviewErrors}>
								{Object.entries(errors).map(([_, error]) => (
									<li>{error?.message}</li>
								))}
							</ul>
						)}
						<Button variant={'light'} type='submit'>
							Leave
						</Button>
					</div>
				)}
			</form>
		</div>
	)
}

export default LeaveReviewForm
