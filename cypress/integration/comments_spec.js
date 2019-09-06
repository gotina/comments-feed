describe("List of comments", () => {
  it("shows a timestamp", () => {
    cy.visit('/')
    cy.get('time').should('be.visible')
  });
});
