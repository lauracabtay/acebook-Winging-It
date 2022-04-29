describe("Timeline", () => {
  it("can submit posts, when signed in, and view them", () => {
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

    // submit a post
    cy.visit("/posts");
    cy.contains("ADD NEW POST").click();

    cy.get("#new-post-form").find('[id="post-message-input"]').type("Hello, world!");
    cy.get("#new-post-form").submit();

    cy.get(".single-post").should("contain", "Hello, world!");
  });

  it("lists posts in reverse chronological", () => {
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

    // submit posts
    cy.visit("/posts");
    cy.contains("ADD NEW POST").click();

    cy.get("#new-post-form").find('[id="post-message-input"]').type("This is a first message");
    cy.get("#new-post-form").submit();

    cy.contains("ADD NEW POST").click();

    cy.get("#new-post-form").find('[id="post-message-input"]').type("This is a second message");
    cy.get("#new-post-form").submit();

    cy.contains("ADD NEW POST").click();

    cy.get("#new-post-form").find('[id="post-message-input"]').type("This is a third message");
    cy.get("#new-post-form").submit();

    cy.get(".all-posts").first().should("contain", "This is a third message");
    cy.get(".all-posts").last().should("contain", "This is a first message");
  });

  it("display time of post", () => {
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

    // check for timestamp
    cy.visit("/posts");
    cy.contains("ADD NEW POST").click();

    cy.get("#new-post-form").find('[id="post-message-input"]').type("This is a first message");
    cy.get("#new-post-form").submit();

    const currentTime = new Date();
    const timestamp = `${currentTime.getHours()}:${currentTime.getMinutes()}, ${currentTime.getDate()}-${("0" + (currentTime.getMonth()+1)).slice(-2)}-${currentTime.getFullYear()}`
    cy.get('.all-posts').last().should("contain", timestamp);
  });
})

