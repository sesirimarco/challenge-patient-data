import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Notes from "./routes/Notes/Notes";
import Patients from "./routes/Patients/Patients";
import { store } from "./store/store";

interface AppLayoutProps {
	children: React.ReactNode;
}
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
	<>
		<div className="app-layout">
			<Header />
			<div className="app-body">{children}</div>
			<footer>
				<p>© 2023 Challenge Patient Data.</p>
			</footer>
		</div>
	</>
);

const App = () => (
	<>
		<Provider store={store}>
			<Router>
				<AppLayout>
					<Routes>
						<Route path="/" element={<Patients />} />
						<Route path="/notes" element={<Notes />} />
					</Routes>
				</AppLayout>
			</Router>
		</Provider>
	</>
);

export default App;
