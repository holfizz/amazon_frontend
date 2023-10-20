import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cls from './Button.module.scss'

interface IButton  extends ButtonHTMLAttributes<HTMLButtonElement>{
	variant:'dark'| 'light' | 'white'
}

const Button: FC<PropsWithChildren<IButton>> = ({children, variant,...res }) => {
		return <button
			{...res}
			className={[cls.Button,cls[variant.charAt(0).toUpperCase()+ variant.slice(1)]].join(' ')}
		>{children}</button>
	}
export default Button
