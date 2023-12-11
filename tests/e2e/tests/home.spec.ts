describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");
		cy.findByRole("heading", {
			name: /Patients/i,
		}).should("exist");
	});

	it("click on first patient card must show it as detail", () => {
		cy.visit("/");
		cy.get(".Card").first().click();
		cy.get(".Modal-content").find(".Card");
	});

	it("click on New Patient button must show the form", () => {
		cy.visit("/");
		cy.get(".AddButton").first().click();
		cy.get(".Modal-content").find(".PatientForm");
	});

	it("if is not value on field the save button must be disabled", () => {
		cy.visit("/");
		cy.get(".AddButton").first().click();

		cy.get("#cancel").should("not.have.attr", "disabled");
		cy.get("#cancel").click();
	});

	it("add new patient", () => {
		cy.visit("/");
		cy.get(".AddButton").first().click();
		cy.get("#avatar").type(
			"https://i.pinimg.com/564x/48/60/a9/4860a9436570c05ff6085ad7720eb105.jpg"
		);
		cy.get("#name").type("New Patient");
		cy.get("#description").type("New Patient description");
		cy.get("#website").type("http://test.com");

		cy.get("#save").should("not.have.attr", "disabled");
		cy.get("#save").click();
		cy.contains(".Card", "New Patient").should("exist");
	});
});
