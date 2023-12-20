import "./Patients.scss";

import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import AddButton from "../../components/AddButton/AddButton";
import Card from "../../components/Card/Card";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Loading from "../../components/Loading/Loading";
import Modal from "../../components/Modal/Modal";
import PatientForm from "../../components/PatientForm/PatientForm";
import { Patient } from "../../interfaces/patients";
import { useGetPatientsQuery } from "../../store/services/patients";
import { editPatient, savePatient, setAllPatients } from "../../store/slices/patientSlice";
import { RootState } from "../../store/store";

const Patients = () => {
	const { data, error, isLoading } = useGetPatientsQuery();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [selectedPatient, setSelectedPatient] = useState<Patient | undefined>(undefined);
	const [edit, setEdit] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const dispatch = useDispatch();
	const patientData = useSelector((state: RootState) => state.patientData.patients);

	useMemo(() => {
		if (data?.length) {
			dispatch(setAllPatients(data));
		}
	}, [data, dispatch]);

	const saveData = (patient: Patient) => {
		if (patient.id.length) {
			dispatch(editPatient(patient));
		} else {
			const newPatient = {
				...patient,
				// eslint-disable-next-line @typescript-eslint/no-unsafe-call
				id: uuidv4() as string,
				createdAt: new Date().toISOString(),
			};
			dispatch(savePatient(newPatient));
		}
	};

	useEffect(() => {
		if (error) {
			const fetchBaseQueryError = error as FetchBaseQueryError;
			if (fetchBaseQueryError.data) {
				setErrorMessage(fetchBaseQueryError.data as string);
			}
		}
	}, [error]);

	const newPatient = () => {
		setShowModal(true);
		setEdit(true);
		setSelectedPatient(undefined);
	};

	return (
		<div className="Patients">
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
			{isLoading ? <Loading /> : null}
			{errorMessage ? (
				<ErrorBoundary message={errorMessage} resetError={() => setErrorMessage(null)} />
			) : null}
			{patientData.length ? (
				<div className="Patients-container">
					<AddButton onClick={() => newPatient()}>
						<h2>New Patient</h2>
					</AddButton>
					{patientData.map((patient: Patient) => (
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
					))}
				</div>
			) : null}
		</div>
	);
};

export default Patients;
