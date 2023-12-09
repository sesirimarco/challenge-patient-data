import Card from "../components/Card";
import { Patient } from "../interfaces/patients";
import { useGetPatientsQuery } from "../store/services/patients";

const Patients = () => {
	const { data, error, isLoading } = useGetPatientsQuery("");

	console.log({ data });

	return (
		<>
			<h1>Patients</h1>
			{data?.length
				? data.map((patient: Patient) => (
						<Card onSave={(data: Patient) => console.log(data)} patient={patient} />
				  ))
				: null}
		</>
	);
};

export default Patients;
