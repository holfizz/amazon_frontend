import { ICategory } from '@/interfaces/category.interface'
import { IMenuItem } from '@/app/Layout/Sidebar/menu.interdace'

export const convertToMenuItems = (
	categories: ICategory[] | undefined,
): IMenuItem[] | undefined => {
	return categories?.map(category => ({
		label: category.name,
		href: `/category/${category.slug}`,
	}))
}
