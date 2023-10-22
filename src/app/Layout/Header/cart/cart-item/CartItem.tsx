import Image from 'next/image'
import { FC } from 'react'

import cls from '../Cart.module.scss'

import CartActions from './cart-actions/CartActions'
import { convertPrice } from '@/utlis/convertPrice'
import { ICartItem } from '@/interfaces/cart.interface'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={cls.item}>
			<Image
				className={cls.image}
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.name}
			/>
			<div>
				<div className={cls.name}>{item.product.name}</div>
				<div className={cls.price}>{convertPrice(item.product.price)}</div>

				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
