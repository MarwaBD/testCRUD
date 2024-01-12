describe("crud product", () => {
  it("should sign in successfully, navigate to projects page, and add project", () => {
    cy.visit("http://localhost:3000");

    cy.get(".btn-success").click();

    // Assert that the URL is now /create
    cy.url().should("include", "/create");

    cy.get("[data-cy=product-name-input]").type("Test Product4444");
    cy.get("[data-cy=product-price-input]").type("25.99");
    cy.get("[data-cy=product-quantity-input]").type("10");

    // Click the submit button
    cy.get("[data-cy=submit-button]").click();
    cy.url().should("eq", "http://localhost:3000/");
    cy.get("table").should("be.visible");
    cy.contains("Test Product4444").should("be.visible");
    cy.wait(3000);
  });
});
