'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

import Button from '@/ui/button/Button'
import ProductItem from '@/ui/catalog/product-item/ProductItem'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import styles from './Checkout.module.scss'
import CheckoutItem from './CheckoutItem'
import { IProduct } from '@/interfaces/product.interface'
import Heading from '@/ui/heading/Heading'
import { convertPrice } from '@/utlis/convertPrice'

const Checkout: FC<{ products: IProduct[] }> = ({ products = [] }) => {
	const { items, total } = useCart()

	const { reset } = useActions()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create order and payment'],
		// () =>
		// 	OrderService.place({
		// 		items: items.map(item => ({
		// 			price: item.price,
		// 			quantity: item.quantity,
		// 			productId: item.product.id,
		// 		})),
		// 	}),
		{
			onSuccess({ data }) {
				reset()
				push(data.confirmation.confirmation_url)
			},
		},
	)

	return (
		<>
			{items.length ? (
				<section className={styles.checkout}>
					<div>
						<Heading fontSize={'24px'} className='mb-6'>
							Checkout
						</Heading>
						<div className={styles.list}>
							{items.map(item => (
								<CheckoutItem key={item.id} product={item.product} />
							))}
						</div>
						<div className={styles.footer}>
							<div className={styles.total}>
								<div>Total Cost</div>
								<div>{convertPrice(total)}</div>
							</div>

							<Button
								variant='light'
								className='mt-5 mb-2'
								onClick={() => mutate()}
							>
								Place order
							</Button>
						</div>
					</div>
					<div>
						<Heading fontSize={'24px'}>Recommended products</Heading>
						<div className={styles.recommended}>
							{products
								.filter(
									product =>
										!items.map(item => item.product.id).includes(product.id),
								)
								.slice(0, 2)
								.map(product => (
									<ProductItem product={product} key={product.id} />
								))}
						</div>
					</div>
				</section>
			) : (
				<div>Fill your cart first!</div>
			)}
		</>
	)
}

export default Checkout
