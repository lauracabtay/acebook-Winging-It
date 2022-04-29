describe("Authentication", () => {
  it("A user signs in and is redirected to /posts", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#email-input").type("someone@example.com");
    cy.get("#password-input").type("password");
    cy.get("#signup-page-button").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email-input").type("someone@example.com");
    cy.get("#password-input").type("password");
    cy.get("#login-page-button").click();

    cy.url().should("include", "/posts");
    cy.contains("a", "jack");
  });
});
