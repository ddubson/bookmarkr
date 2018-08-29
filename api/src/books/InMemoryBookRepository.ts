import Book from "./Book";
import Repository from "./Repository";

const books: Array<Book> = [
  {
    id: 1,
    author: "Stephen King",
    title: "IT"
  },
  {
    id: 2,
    author: "Stephen King",
    title: "The Stand"
  }
];

class InMemoryBookRepository implements Repository<Book> {
  private BookRepository() {
  };

  fetchAll(): Array<Book> {
    return books;
  }

  findById(id: number): Book {
    return books.find(b => b.id == id);
  }

  static createRepository() {
    return new InMemoryBookRepository();
  }
}

export default InMemoryBookRepository;