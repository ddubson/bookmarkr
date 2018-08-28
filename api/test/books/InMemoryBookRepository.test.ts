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
      expect(bookRepository.fetchAll().length).toBeGreaterThan(0);
    });
  });
});