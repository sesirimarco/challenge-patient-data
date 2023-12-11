import "./Patients.scss";

import { useState } from "react";

import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import { Patient } from "../interfaces/patients";
import { useGetPatientsQuery } from "../store/services/patients";

const Patients = () => {
	const { data, error, isLoading } = useGetPatientsQuery("");
	const [showModal, setShowModal] = useState<boolean>(false);
	const [selectedPatient, setSelectedPatient] = useState<Patient | undefined>(undefined);
	console.log({ data });

	return (
		<>
			<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
				<Card onSelect={(data: Patient) => console.log(data)} patient={selectedPatient} />
			</Modal>
			<h1>Patients</h1>
			<div className="Patients-container">
				{data?.length
					? data.map((patient: Patient) => (
							<Card
								onSelect={(data: Patient) => {
									setShowModal(true);
									setSelectedPatient(data);
								}}
								patient={patient}
							/>
					  ))
					: null}
			</div>
		</>
	);
};

export default Patients;
