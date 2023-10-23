import { FC } from 'react'
import Button from '@/ui/button/Button'
import cls from './Pagination.module.scss'

interface IPagination {
	numberPages: number
	changePage: (page: string) => void
	currentPage?: number | string
}

const Pagination: FC<IPagination> = ({
	numberPages,
	changePage,
	currentPage,
}) => {
	return (
		<div className={cls.PaginationPage}>
			{Array.from({ length: numberPages > 1 ? numberPages : 1 }).map(
				(_, index) => {
					const pageNumber = (index + 1).toString()

					return (
						<div className={cls.buttonBlock}>
							<Button
								key={pageNumber}
								variant={currentPage === pageNumber ? 'light' : 'white'}
								onClick={() => changePage(pageNumber)}
								disabled={currentPage === pageNumber}
							>
								{pageNumber}
							</Button>
						</div>
					)
				},
			)}
		</div>
	)
}

export default Pagination
