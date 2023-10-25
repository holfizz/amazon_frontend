'use client'

import Link from 'next/link'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

import SquareButton from '@/ui/button/SquareButton'

import cls from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { useOutside } from '@/hooks/useOutside'
import { useCart } from '@/hooks/useCart'
import { convertPrice } from '@/utlis/convertPrice'
import Button from '@/ui/button/Button'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	return (
		<div className={cls.cart} ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={items.length}
			/>
			{isShow && (
				<div className={cls.cartWrapper}>
					<div className={cls.myCartTitle}>My cart</div>

					<div className={cls.cartBlock}>
						{items.length ? (
							items.map(item => <CartItem item={item} key={item.id} />)
						) : (
							<div>Cart is empty!</div>
						)}
					</div>
					<div className={cls.footer}>
						<div>Total:</div>
						<div>{convertPrice(total)}</div>
					</div>
					{!!items.length && (
						<div className={cls.cartTitle}>
							<Link href='/checkout' onClick={() => setIsShow(false)}>
								<Button variant={'light'}>Go to checkout</Button>
							</Link>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Cart
