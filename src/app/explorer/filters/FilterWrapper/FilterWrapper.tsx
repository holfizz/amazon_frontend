import { FC, PropsWithChildren } from 'react'
import cls from './FilterWrapper.module.scss'

interface IFilterWrapper {
	title: string
}

const FilterWrapper: FC<PropsWithChildren<IFilterWrapper>> = ({
	children,
	title,
}) => {
	return (
		<div className={cls.filtersWrapper}>
			<div className={cls.filtersWrapperTitle}>{title}</div>
			<div>{children}</div>
		</div>
	)
}
export default FilterWrapper
