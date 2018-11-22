describe("Add a bookmark", () => {
  describe("when I navigate to the home page", () => {
    beforeEach(() => {
      cy.visit("/")
    });

    describe("and I enter bookmark title and link into the form", () => {
      beforeEach(() => {
        cy.get("input[data-test=\"bookmark-title\"]").type("Hello");
        cy.get("input[data-test=\"bookmark-link\"]").type("World!");
      });

      describe("when I click Add Bookmark", () => {
        beforeEach(() => {
          cy.get("input[data-test=\"bookmark-save\"]").click();
        });

        it("should populate a bookmark card", () => {
          cy.get(".card-title").contains("Hello");
          cy.get(".card-text").contains("World!");
        });
      });
    });
  });
});