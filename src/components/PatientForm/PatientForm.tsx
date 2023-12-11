import "./PatientForm.scss";

import React, { useEffect, useState } from "react";

import { Patient } from "../../interfaces/patients";

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

	return (
		<div className="PatientForm">
			<img src={formData.avatar} alt={formData.name} />
			<label htmlFor="name">Avatar:</label>
			<input
				type="text"
				id="avatar"
				name="avatar"
				value={formData.avatar}
				onChange={handleInputChange}
			/>
			<label htmlFor="name">Name:</label>
			<input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

			<label htmlFor="description">Description:</label>
			<textarea
				id="description"
				name="description"
				value={formData.description}
				onChange={handleInputChange}
			/>

			<label htmlFor="website">Website:</label>
			<input
				type="text"
				id="website"
				name="website"
				value={formData.website}
				onChange={handleInputChange}
			/>

			<div className="PatientForm-buttons">
				<button onClick={handleSave}>Save</button>
				<button onClick={onCancel}>Cancel</button>
			</div>
		</div>
	);
};

export default PatientForm;
