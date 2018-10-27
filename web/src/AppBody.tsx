import {PureComponent} from "react";
import Book from "./books/Book";
import ProductCard from "./ProductCard";
import * as React from "react";
import shortid = require("shortid");

export interface AppBodyProps {
  getAllBooks: () => Promise<Book[]>,
}

interface AppBodyState {
  books: Book[]
}

export class AppBody extends PureComponent<AppBodyProps, AppBodyState> {
  constructor(props: AppBodyProps) {
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

  render() {
    return (
      <section className="app-body">
        <section className="product-highlight-section">
          {
            this.state.books.map((book: Book) => <ProductCard
              key={shortid.generate()}
              title={book.title}
              author={book.author} />)
          }
        </section>
      </section>
    )
  }
}