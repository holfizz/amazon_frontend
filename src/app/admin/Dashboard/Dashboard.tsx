'use client'
import React, { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { StatisticsService } from '@/services/statistic.service'
import Heading from '@/ui/heading/Heading'
import Loader from '@/ui/loader/Loader'
import { convertPrice } from '@/utlis/convertPrice'
import cls from './Dashboard.module.scss'

interface IDashboard {}

const Dashboard: FC = () => {
	const { data, isFetching } = useQuery(
		['statistics'],
		() => StatisticsService.getMain(),
		{
			select: ({ data }) => data,
		},
	)
	return (
		<>
			<Heading fontSize={'24px'}>Dashboard</Heading>
			{isFetching ? (
				<Loader />
			) : data?.length ? (
				<div className={cls.wrapper}>
					{data.map((item, index) => (
						<div key={item.name} className={cls.item}>
							<div>{item.name}</div>
							<div>
								{index === data.length - 1
									? convertPrice(item.value || 0)
									: item.value}
							</div>
						</div>
					))}
				</div>
			) : (
				<div>Statistics not loaded!</div>
			)}
		</>
	)
}
export default Dashboard
