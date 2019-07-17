describe("Add a bookmark", () => {
  describe("when I navigate to the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    describe("and I enter bookmark title, body, link into the form", () => {
      beforeEach(() => {
        cy.get("input[data-test=\"input-bookmark-title\"]").type("Hello");
        cy.get("textarea[data-test=\"input-bookmark-content\"]").type("Hello there everyone. This is some content.");
        cy.get("input[data-test=\"input-bookmark-link\"]").type("World!");
      });

      describe("when I click Add Bookmark", () => {
        beforeEach(() => {
          cy.get("input[data-test=\"bookmark-save\"]").click();
        });

        it("should populate a bookmark card", () => {
          cy.get(".card-title").contains("Hello");
          cy.get("div[data-test=\"bookmark-content\"]").contains("Hello there everyone. This is some content.");
          cy.get("div[data-test=\"bookmark-link\"]").contains("World!");
        });

        describe("when I click Remove", () => {
          beforeEach(() => {
            cy.get("a[data-test=\"bookmark-remove\"]").click();
          });

          it("should remove the bookmark", () => {
            cy.get("p").contains("No bookmarks yet");
          });
        });
      });
    });
  });
});