class Book {
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  };

  public readonly author: string;
  public readonly title: string;
}

export default Book;
