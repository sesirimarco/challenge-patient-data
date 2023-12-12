import "./PatientForm.scss";

import React, { useEffect, useState } from "react";

import { Patient } from "../../interfaces/patients";
import { isEmpty, isValidUrl } from "../../utils/validation";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";

interface PatientFormProps {
	patient?: Patient;
	onSave: (data: Patient) => void;
	onCancel: () => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ patient, onSave, onCancel }) => {
	const [formData, setFormData] = useState<Patient>({
		id: "",
		name: "",
		description: "",
		website: "",
		avatar: "",
		createdAt: "",
	});

	useEffect(() => {
		if (patient) {
			setFormData({
				id: patient.id || "",
				name: patient.name || "",
				description: patient.description || "",
				website: patient.website || "",
				createdAt: patient.createdAt || "",
				avatar: patient.avatar || "",
			});
		}
	}, [patient]);

	const handleInputChange = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSave = () => {
		onSave(formData);
	};

	const enabledSubmit = () => {
		const isAvatarValid = !isEmpty(formData.avatar) && isValidUrl(formData.avatar);
		const isNameValid = !isEmpty(formData.name);
		const isDescriptionValid = !isEmpty(formData.description);
		const isWebsiteValid = !isEmpty(formData.website) && isValidUrl(formData.website);

		return isAvatarValid && isNameValid && isDescriptionValid && isWebsiteValid;
	};

	return (
		<div className="PatientForm">
			{isValidUrl(formData.avatar) ? (
				<ImageWithFallback
					src={formData.avatar}
					alt={formData.name}
					fallbackSrc="https://cdn.vectorstock.com/i/1000x1000/10/81/error-404-glitch-text-vector-18841081.webp"
				/>
			) : (
				<div className="PatientForm-img-empty"></div>
			)}
			<div className="PatientForm-container">
				<label htmlFor="name">Avatar:</label>
				<input
					className={`${isEmpty(formData.avatar) || !isValidUrl(formData.avatar) ? "error" : ""}`}
					type="text"
					id="avatar"
					name="avatar"
					value={formData.avatar}
					onChange={handleInputChange}
				/>
				<label htmlFor="name">Name:</label>
				<input
					maxLength={25}
					className={`${isEmpty(formData.name) ? "error" : ""}`}
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
				/>

				<label htmlFor="description">Description:</label>
				<textarea
					maxLength={100}
					className={`${isEmpty(formData.description) ? "error" : ""}`}
					id="description"
					name="description"
					value={formData.description}
					onChange={handleInputChange}
				/>

				<label htmlFor="website">Website:</label>
				<input
					className={`${isEmpty(formData.website) || !isValidUrl(formData.website) ? "error" : ""}`}
					type="text"
					id="website"
					name="website"
					value={formData.website}
					onChange={handleInputChange}
				/>

				<div className="PatientForm-container-buttons">
					<button
						id="save"
						onClick={handleSave}
						disabled={!enabledSubmit()}
						className={`${!enabledSubmit() ? "button-disabled" : ""}`}
					>
						Save
					</button>
					<button id="cancel" onClick={onCancel}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default PatientForm;
