import {PureComponent} from "react";
import Book from "./books/Book";
import ProductCard from "./ProductCard";
import * as React from "react";
import shortid = require("shortid");
import AddBookmark from "./AddBookmark";

export interface AppBodyProps {
  getAllBooks: () => Promise<Book[]>,
}

interface AppBodyState {
  books: Book[],
  bookmarks: Bookmark[]
}

class Bookmark {
  public title: string;
  public link: string;

  constructor(title: string, link: string) {
    this.title = title;
    this.link = link;
  }
}

export class AppBody extends PureComponent<AppBodyProps, AppBodyState> {
  constructor(props: AppBodyProps) {
    super(props);
    this.state = {
      books: [],
      bookmarks: []
    }
  }

  componentDidMount(): void {
    this.props.getAllBooks().then((books: Book[]) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <section className="app-body">
        <section className="product-highlight-section">
          {
            this.state.books.map((book: Book) => <ProductCard
              key={shortid.generate()}
              title={book.title}
              author={book.author}/>)
          }
        </section>
        <section>
          <AddBookmark addBookmark={(title, link) => {
            this.setState({bookmarks: [new Bookmark(title, link), ...this.state.bookmarks]})
          }}/>
        </section>
        <section>
          {this.state.bookmarks.map(bookmark => <div>{bookmark.title}: {bookmark.link}</div>)}
        </section>
      </section>
    )
  }
}