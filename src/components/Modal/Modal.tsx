import "./Modal.scss";

import React, { FC, ReactNode } from "react";

interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
	return (
		<div className={`Modal-overlay ${isOpen ? "" : "Modal-hidden"}`}>
			<div className={`Modal-content ${isOpen ? "" : "Modal-hidden"}`}>
				<span className="Modal-close-button" onClick={() => onClose()}>
					&times;
				</span>
				{children}
			</div>
		</div>
	);
};

export default Modal;
