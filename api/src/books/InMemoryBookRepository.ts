import Book from "./Book";
import Repository from "./Repository";

const books: Book[] = [
  {
    author: "Stephen King",
    id: 1,
    title: "IT",
  },
  {
    author: "Stephen King",
    id: 2,
    title: "The Stand",
  },
];

class InMemoryBookRepository implements Repository<Book> {
  public static createRepository() {
    return new InMemoryBookRepository();
  }

  public fetchAll(): Book[] {
    return books;
  }

  public findById(id: number): Book {
    return books.find((b) => b.id === id);
  }
}

export default InMemoryBookRepository;
