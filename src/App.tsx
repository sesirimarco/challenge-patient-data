import { useGetPatientsQuery } from "./store/services/patients";

export function App() {
	const { data, error, isLoading } = useGetPatientsQuery(null);

	return (
		<div className="App">
			{isLoading ? "Is Loading ..." : null}
			<h3>Init</h3>
		</div>
	);
}
