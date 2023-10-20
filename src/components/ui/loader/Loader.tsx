import React, { FC } from 'react'
import cls from './Loader.module.scss'

const Loader: FC = () => {
	return (
		<div className={cls.ldsRing}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Loader
