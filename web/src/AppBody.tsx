import * as React from "react";
import {PureComponent} from "react";
import Book from "./books/Book";
import AddBookmark from "./AddBookmark";
import {BookmarkCard} from "./BookmarkCard";
import Bookmark from "./Bookmark";
import * as shortid from "shortid";

const loader = require("./images/loader.svg");

export interface AppBodyProps {
  getAllBooks: () => Promise<Book[]>;
}

interface AppBodyState {
  books: Book[];
  bookmarks: Bookmark[];
  bookmarksLoading: boolean;
}

export class AppBody extends PureComponent<AppBodyProps, AppBodyState> {
  constructor(props: AppBodyProps) {
    super(props);
    this.state = {
      books: [],
      bookmarks: [],
      bookmarksLoading: true,
    }
  }

  componentDidMount(): void {
    this.setState({
      bookmarks: this.state.bookmarks,
      bookmarksLoading: false,
    });
  }

  render() {
    return (
      <section className="app-body">
        <section>
          <AddBookmark addBookmark={(bookmark: Bookmark) => {
            this.setState({bookmarks: [bookmark, ...this.state.bookmarks]})
          }} />
        </section>
        <section>
          <h2 className="text-white mt-4">Bookmarks</h2>
          {this.state.bookmarksLoading && <img alt="bookmarkr-logo" src={loader} />}
          {this.state.bookmarks.length === 0 && <p className="text-white font-italic">No bookmarks yet.</p>}
          {this.state.bookmarks.map(bookmark =>
            <BookmarkCard key={shortid.generate()} title={bookmark.title} link={bookmark.link} />)}
        </section>
      </section>
    )
  }
}