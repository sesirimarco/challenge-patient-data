import "./ErrorBoundary.scss";

import { FC } from "react";

interface ErrorProps {
	message: string;
	resetError: () => void;
}
const ErrorBoundary: FC<ErrorProps> = ({ message, resetError }) => {
	return (
		<div className="ErrorBoundary">
			<p>Error: {message}</p>
			<button onClick={resetError}>Accept</button>
		</div>
	);
};

export default ErrorBoundary;
