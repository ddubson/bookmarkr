import {eachLike, somethingLike} from "@pact-foundation/pact/dsl/matchers";
import Book from "../../src/books/Book";
import {getAllBooks} from "../../src/books/GetAllBooks.service";

xdescribe("Books API", () => {​
    describe("fetch all books", () => {
      beforeEach(() => {
        const interaction = {
          uponReceiving: "a request to fetch all books",
          willRespondWith: {
            body: eachLike(
              {
                author: somethingLike("Stephen King"),
                id: somethingLike(2),
                isbn: somethingLike("978-0-385-12168-2"),
                title: somethingLike("The Stand"),
              },
            ),
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            status: 200,
          },
          withRequest: {
            method: "GET",
            path: "/api/books",
          },
        };

        return provider.addInteraction(interaction);
      });

      it("should fetch all books successfully", (done: jest.DoneCallback) => {
        getAllBooks()
          .then((response: Book[]) => {
            expect(response).toEqual([{
              author: "Stephen King",
              id: 2,
              isbn: "978-0-385-12168-2",
              title: "The Stand",
            }]);
          })
          .then(done);
      });
    });
});
