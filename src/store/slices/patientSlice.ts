import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { Patient } from "../../interfaces/patients";

export interface PatientState {
	patients: Patient[];
}
const initialState: PatientState = { patients: [] };

export const patientSlice = createSlice({
	name: "patientData",
	initialState,
	reducers: {
		savePatient: (state, action: PayloadAction<Patient>) => {
			state.patients = [action.payload, ...state.patients];
		},
		removePatient: (state, action: PayloadAction<string>) => {
			// eslint-disable-next-line no-console
			console.log("remove", state, action);
		},
		editPatient: (state, action: PayloadAction<Patient>) => {
			const patient: Patient = action.payload;
			const tmpPatients = [...state.patients];
			const editedPatients = tmpPatients.map((editedPatient: Patient) => {
				if (editedPatient.id === patient.id) {
					return patient;
				}

				return editedPatient;
			});
			state.patients = editedPatients;
		},
		setAllPatients: (state, action: PayloadAction<Patient[]>) => {
			state.patients = action.payload;
		},
	},
});

export const { savePatient, removePatient, editPatient, setAllPatients } = patientSlice.actions;
export default patientSlice.reducer;
