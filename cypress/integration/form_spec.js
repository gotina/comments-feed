describe("Comments Form", () => {
  it("handles required fields", () => {
    cy.visit('/')
    cy.get('button').click()
    cy.get('.alert').should('be.visible')
  });
});
