import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Patient } from "./../../interfaces/patients";

// Define a service using a base URL and expected endpoints
export const patientsApi = createApi({
	reducerPath: "patientsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://63bedcf7f5cfc0949b634fc8.mockapi.io" }),
	endpoints: (builder) => ({
		getPatients: builder.query<Patient[], void>({
			query: () => `/users`,
		}),
	}),
});

export const { useGetPatientsQuery } = patientsApi;
