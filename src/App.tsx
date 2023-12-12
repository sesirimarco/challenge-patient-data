import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Patients from "./routes/Patients";
import { store } from "./store/store";

interface AppLayoutProps {
	children: React.ReactNode;
}
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
	<>
		<div className="app-layout">
			<header>
				<h1>Challenge Patient Data</h1>
			</header>
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
			<AppLayout>
				<Router>
					<Routes>
						<Route path="/" element={<Patients />} />
					</Routes>
				</Router>
			</AppLayout>
		</Provider>
	</>
);

export default App;
