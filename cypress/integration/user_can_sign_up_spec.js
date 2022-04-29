describe("Registration", () => {
  it("A user signs up and is redirected to sign in", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#username-input").type("jack");
    cy.get("#email-input").type("someone@example.com");
    cy.get("#password-input").type("password");
    cy.get("#signup-page-button").click();

    cy.url().should("include", "/sessions/new");
  });
});
