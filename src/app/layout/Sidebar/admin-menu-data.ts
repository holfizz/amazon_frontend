import { IMenuItem } from '@/app/layout/Sidebar/menu.interdace'
import { getAdminUrl } from '@/config/url.config'

export const ADMIN_MANU: IMenuItem[] = [
	{ label: 'Dashboard', href: getAdminUrl('') },
	{ label: 'Products', href: getAdminUrl('/products') },
	{ label: 'Categories', href: getAdminUrl('/categories') },
	{ label: 'Reviews', href: getAdminUrl('/reviews') },
	{ label: 'Orders', href: getAdminUrl('/orders') },
]
