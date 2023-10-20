import React, { FC } from 'react'
import { IProduct } from '@/interfaces/product.interface'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { RiShoppingCart2Fill, RiShoppingCart2Line } from 'react-icons/ri'
import cls from './AddToCartButton.module.scss'

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()
	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id,
	)
	return (
		<div>
			<button
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
								product,
								quantity: 1,
								price: product.price,
						  })
				}
				className={cls.addToCartButton}
			>
				{currentElement ? <RiShoppingCart2Fill /> : <RiShoppingCart2Line />}
			</button>
		</div>
	)
}

export default AddToCartButton
