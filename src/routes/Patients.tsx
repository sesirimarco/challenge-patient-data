import "./Patients.scss";

import { useState } from "react";

import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import PatientForm from "../components/PatientForm/PatientForm";
import { Patient } from "../interfaces/patients";
import { useGetPatientsQuery } from "../store/services/patients";

const Patients = () => {
	const { data, error, isLoading } = useGetPatientsQuery("");
	const [showModal, setShowModal] = useState<boolean>(false);
	const [selectedPatient, setSelectedPatient] = useState<Patient | undefined>(undefined);
	const [edit, setEdit] = useState<boolean>(false);
	console.log({ data });

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
						onSave={(data: Patient) => console.log("save", data)}
						onCancel={() => {
							setEdit(false);
							setShowModal(false);
						}}
					/>
				) : (
					<Card
						onSelect={(data: Patient) => console.log(data)}
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
				{data?.length
					? data.map((patient: Patient) => (
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
