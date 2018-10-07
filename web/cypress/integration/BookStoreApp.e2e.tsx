describe("the book store", () => {
  describe("when I go to the home page", () => {
    it("should display the page title", () => {
      cy.visit("/");
    });
  });
});