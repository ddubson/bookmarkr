import * as React from "react";
import ProductCard from "./ProductCard";
import {PureComponent} from "react";
import Book from "./books/Book";
import shortid = require("shortid");

export interface BookStoreAppProps {
  getAllBooks: () => Promise<Book[]>,
}

interface BookStoreAppState {
  books: Book[]
}

class BookStoreApp extends PureComponent<BookStoreAppProps, BookStoreAppState> {
  constructor(props: BookStoreAppProps) {
    super(props);
    this.state = {
      books: [],
    }
  }

  componentDidMount(): void {
    this.props.getAllBooks().then((books: Book[]) => {
      this.setState({books})
    })
  }

  render(): JSX.Element {
    return <div className="container-fluid">
      <div className="container-fluid">
        <div data-test="page-title">
          Book Store
        </div>
      </div>
      <div>
        {
          this.state.books.map((book: Book) => <ProductCard
            key={shortid.generate()}
            title={book.title}
            author={book.author} />)
        }
      </div>
    </div>
  };
}

export default BookStoreApp;