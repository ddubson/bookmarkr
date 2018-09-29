class Book {
  public readonly author: string;
  public readonly title: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

export default Book;
