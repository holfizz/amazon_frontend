import { FC, HTMLAttributes, PropsWithChildren } from 'react'

interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
	className?: string
	fontSize:
		| '12px'
		| '16px'
		| '18px'
		| '20px'
		| '22px'
		| '24px'
		| '30px'
		| '42px'
		| '50px'
}

const Heading: FC<PropsWithChildren<IHeading>> = ({
	children,
	fontSize,
	...res
}) => {
	return (
		<h1 style={{ fontSize: fontSize }} {...res}>
			{children}
		</h1>
	)
}
export default Heading
