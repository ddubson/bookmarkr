describe("the book store", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("when I go to the home page", () => {
    it("should display the page title", () => {
      cy.get("[data-test='page-title']").should("contain", 'Book Store')
    });

    it("should display books that are sold", () => {
      cy.get(".card").should(($card) => {
        expect($card.eq(0)).to.contain("IT");
        expect($card.eq(1)).to.contain("The Stand");
      });
    })
  });
});