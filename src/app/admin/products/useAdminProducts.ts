'use client'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product/product.service'
import { formatDate } from '@/utlis/format-date'

export const useAdminProducts = () => {
	const { data, isFetching, refetch } = useQuery(
		['get admin products'],
		() => ProductService.getAll(),
		{
			select: data =>
				data.products.map(product => {
					return {
						id: product.id,
						viewUrl: `/product/${product.slug}`,
						editUrl: `/product/edit/${product.slug}`,
						items: [
							product.name,
							product.category.name,
							formatDate(product.createdAt),
						],
					}
				}),
		},
	)
	const { mutate } = useMutation(
		['delete product'],
		(id: number) => ProductService.delete(id),
		{
			onSuccess() {
				refetch()
			},
		},
	)
	return {
		mutate,
		data,
		isFetching,
	}
}
