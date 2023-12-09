import { useGetPatientsQuery } from "../store/services/patients";

const Patients = () => {
	const { data, error, isLoading } = useGetPatientsQuery("");

	console.log({ data });

	return (
		<>
			<h1>Patients</h1>
		</>
	);
};

export default Patients;
