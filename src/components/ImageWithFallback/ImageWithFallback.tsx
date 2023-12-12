import { useState } from "react";

interface ImageWithFallbackProps {
	src: string;
	alt: string;
	fallbackSrc: string;
}
const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, fallbackSrc }) => {
	const [imageError, setImageError] = useState(false);

	const handleError = () => {
		if (!imageError) {
			setImageError(true);
		}
	};

	return <img src={imageError ? fallbackSrc : src} alt={alt} onError={handleError} />;
};

export default ImageWithFallback;
