import { FC, forwardRef, InputHTMLAttributes } from 'react'
import cls from './Input.module.scss'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	variant: 'dark' | 'light'
	ref?: React.Ref<HTMLInputElement>
}

const Input: FC<IInput> = forwardRef(({ children, variant, ...res }, ref) => {
	return (
		<input
			ref={ref}
			{...res}
			className={[
				cls.Input,
				cls[variant.charAt(0).toUpperCase() + variant.slice(1)],
			].join(' ')}
		>
			{children}
		</input>
	)
})
export default Input
