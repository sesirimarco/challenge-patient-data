import "./AddButton.scss";

import { FC, ReactNode } from "react";

interface AddButtonProps {
	children: ReactNode;
	onClick: () => void;
}

const AddButton: FC<AddButtonProps> = ({ children, onClick }) => {
	return (
		<div className="AddButton">
			<button onClick={() => onClick()}>{children}</button>
		</div>
	);
};

export default AddButton;
