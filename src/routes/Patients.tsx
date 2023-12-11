import "./Patients.scss";

import { useEffect, useState } from "react";

import AddButton from "../components/AddButton/AddButton";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import PatientForm from "../components/PatientForm/PatientForm";
import { Patient } from "../interfaces/patients";
import { useGetPatientsQuery } from "../store/services/patients";

const Patients = () => {
	const { data, error, isLoading } = useGetPatientsQuery("");
	const [showModal, setShowModal] = useState<boolean>(false);
	const [selectedPatient, setSelectedPatient] = useState<Patient | undefined>(undefined);
	const [currentData, setCurrentData] = useState<Patient[]>([]);
	const [edit, setEdit] = useState<boolean>(false);

	// use current data for editing
	useEffect(() => {
		if (data?.length) {
			setCurrentData(data);
		}
	}, [data]);

	const saveData = (patient: Patient) => {
		if (patient.id.length) {
			setCurrentData((prevData) =>
				prevData.map((editedPatient: Patient) => {
					if (editedPatient.id === patient.id) {
						return patient;
					}

					return editedPatient;
				})
			);
		} else {
			const newPatient = {
				...patient,
				id: (currentData.length + 1).toString(),
				createdAt: new Date().toISOString(),
			};
			setCurrentData((prevCurrentData) => [newPatient, ...prevCurrentData]);
		}
	};

	const newPatient = () => {
		setShowModal(true);
		setEdit(true);
		setSelectedPatient(undefined);
	};

	return (
		<>
			<Modal
				isOpen={showModal}
				onClose={() => {
					setEdit(false);
					setShowModal(false);
				}}
			>
				{edit ? (
					<PatientForm
						patient={selectedPatient}
						onSave={(data: Patient) => {
							saveData(data);
							setEdit(false);
							setShowModal(false);
						}}
						onCancel={() => {
							setEdit(false);
							setShowModal(false);
						}}
					/>
				) : (
					<Card
						onEdit={(data: Patient) => {
							setEdit(true);
							setShowModal(true);
							setSelectedPatient(data);
						}}
						patient={selectedPatient}
						editAction
					/>
				)}
			</Modal>
			<h1>Patients</h1>
			<div className="Patients-container">
				<AddButton onClick={() => newPatient()}>
					<h2>New Patient</h2>
				</AddButton>
				{currentData.length
					? currentData.map((patient: Patient) => (
							<div key={patient.id}>
								<Card
									onSelect={(data: Patient) => {
										setSelectedPatient(data);
										setShowModal(true);
									}}
									onEdit={(data: Patient) => {
										setEdit(true);
										setShowModal(true);
										setSelectedPatient(data);
										saveData(data);
									}}
									patient={patient}
									ellipsis
									viewAction
									editAction
								/>
							</div>
					  ))
					: null}
			</div>
		</>
	);
};

export default Patients;
