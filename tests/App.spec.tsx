import { render, screen } from "@testing-library/react";

import App from "../src/App";
import Card from "../src/components/Card/Card";
import { Patient } from "../src/interfaces/patients";

test("App component display Patients section", () => {
	render(<App />);

	const heading = screen.getByText(/Patients/i);

	expect(heading).toBeInTheDocument();
});

test("App component display New Patient button", () => {
	render(<App />);

	const newPatientTitle = screen.getByText(/New Patient/i);

	expect(newPatientTitle).toBeInTheDocument();
});

test("Render patient Card component", () => {
	const patientData: Patient = {
		createdAt: "2023-10-01T14:29:23.603Z",
		name: "Mr. Chad Witting",
		avatar:
			"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/871.jpg",
		description:
			"Dolorem ducimus quia odit blanditiis molestias. Accusantium perspiciatis cum ex reprehenderit cupiditate atque error neque occaecati. Magnam consequatur animi sunt repellat. Atque mollitia unde commodi.\nTemporibus praesentium quam. Eos quaerat exercitationem pariatur cumque sit laborum corporis. Repudiandae qui quae eaque aliquid explicabo tempore maxime inventore inventore. Impedit soluta ad distinctio veritatis reiciendis ea est omnis odio. Eligendi reprehenderit facere voluptatem fugiat possimus iste cumque. Labore optio debitis odio fuga.\nOmnis minus quas fuga error reprehenderit quae ut. At id inventore eum quod veritatis suscipit. Vitae dolore praesentium sunt aperiam. Ab perspiciatis eveniet culpa.",
		website: "https://unrealistic-condor.info",
		id: "84",
	};
	render(<Card patient={patientData} viewAction editAction />);

	const cardTitle = screen.getByText("Mr. Chad Witting");

	expect(cardTitle).toBeInTheDocument();
});
