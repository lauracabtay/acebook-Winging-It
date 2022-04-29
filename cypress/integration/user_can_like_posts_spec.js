describe("Like Button", () => {
  it("can like posts", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email-input").type("someone@example.com");
    cy.get("#password-input").type("password");
    cy.get("#login-page-button").click();

    // submit a post
    cy.visit("/posts");
    cy.contains("ADD NEW POST").click();

    cy.get("#new-post-form").find('[id="post-message-input"]').type("Hello, world!");
    cy.get("#new-post-form").submit();

    cy.contains("LIKE").click();
    cy.get(".like-count").should("contain", "Liked by 1 person");
  });
})