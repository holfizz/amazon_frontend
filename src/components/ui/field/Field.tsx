import { forwardRef } from 'react'
import cls from './Field.module.scss'
import Input from '@/ui/input/Input'
import { IField } from '@/ui/field/Field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, className, type = 'text', style, Icon, ...rest },
		ref,
	) => {
		return (
			<div className={cls.field} style={style}>
				<label>
					<span className={cls.spanField}>
						{Icon && <Icon />}
						{placeholder}
					</span>
					<Input variant={'light'} ref={ref} type={type} {...rest} />
				</label>
				{error && <div className={cls.error}>{error}</div>}
			</div>
		)
	},
)

export default Field
