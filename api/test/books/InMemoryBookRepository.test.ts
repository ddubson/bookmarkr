import Repository from "../../src/books/Repository";
import InMemoryBookRepository from "../../src/books/InMemoryBookRepository";
import Book from "../../src/books/Book";

describe("InMemoryBookRepository", () => {
  let bookRepository: Repository<Book>;

  beforeEach(() => {
    bookRepository = InMemoryBookRepository.createRepository();
  });

  describe("fetchAll", () => {
    it("should fetch all books in the repository", () => {
      let books = bookRepository.fetchAll();
      expect(books.length).toBeGreaterThan(0);
      books.forEach(book => {
        expect(book.id).toBeDefined();
        expect(book.isbn).toBeDefined();
        expect(book.author).toBeDefined();
        expect(book.title).toBeDefined();
      })
    });
  });

  describe("findById", () => {
    describe("when given a valid ID", () => {
      const validId: number = 1;

      it("should retrieve the book by its ID", () => {
        expect(bookRepository.findById(validId)).toEqual({
          id: validId,
          isbn: "0-670-81302-8",
          author: "Stephen King",
          title: "IT",
        });
      });
    });
  });
});