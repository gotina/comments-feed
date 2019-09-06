describe("Comments Application", () => {
  beforeEach(function(){
   cy.visit('/')
 })

  it("shows the comment form", () => {
    cy.get('#commentForm').should('be.visible')
  });

  it("shows the comments list", () => {
    cy.get('#commentList').should('be.visible')
  });
});
