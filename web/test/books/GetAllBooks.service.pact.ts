import {getAllBooks} from "../../src/books/GetAllBooks.service";
import {eachLike, somethingLike} from "@pact-foundation/pact/dsl/matchers";
import Book from "../../src/books/Book";

describe('Books API', () => {​
    describe("fetch all books", () => {
      beforeEach(() => {
        const interaction = {
          uponReceiving: "a request to fetch all books",
          withRequest: {
            method: 'GET',
            path: "/api/books"
          },
          willRespondWith: {
            status: 200,
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            },
            body: eachLike(
              {
                id: somethingLike(1),
                author: somethingLike("Stephen King"),
                title: somethingLike("The Stand")
              }
            )
          }
        };

        return provider.addInteraction(interaction);
      });

      // add expectations
      it("should fetch all books successfully", (done: jest.DoneCallback) => {
        getAllBooks()
          .then((response: Book[]) => {
            expect(response).toEqual([{
              id: 1,
              author: "Stephen King",
              title: "The Stand"
            }]);
          })
          .then(done);
      });
    });
});