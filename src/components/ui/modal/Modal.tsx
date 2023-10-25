import type { FC, PropsWithChildren } from 'react'
import { useRef } from 'react'
import ReactDOM from 'react-dom'
import cls from './Modal.module.scss'
import { RiCloseFill } from 'react-icons/ri'

interface IModal {
	isOpen: boolean
	closeModal: () => void
}

const Modal: FC<PropsWithChildren<IModal>> = ({
	closeModal,
	children,
	isOpen,
}) => {
	const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'))

	if (!isOpen || !modalRef.current) {
		return null
	}

	return ReactDOM.createPortal(
		<div className={cls.overlay} onClick={closeModal}>
			<div className={cls.window} onClick={e => e.stopPropagation()}>
				<button onClick={closeModal}>
					<RiCloseFill />
				</button>
				{children}
			</div>
		</div>,
		modalRef.current,
	)
}
export default Modal
