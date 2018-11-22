import {PureComponent} from "react";
import Book from "./books/Book";
import * as React from "react";
import shortid = require("shortid");

const loader = require("./images/loader.svg");
import AddBookmark from "./AddBookmark";
import {BookmarkCard} from "./BookmarkCard";

export interface AppBodyProps {
  getAllBooks: () => Promise<Book[]>;
}

interface AppBodyState {
  books: Book[];
  bookmarks: Bookmark[];
  bookmarksLoading: boolean;
}

class Bookmark {
  public id: string;
  public title: string;
  public link: string;

  constructor(title: string, link: string) {
    this.id = shortid.generate();
    this.title = title;
    this.link = link;
  }
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
          <AddBookmark addBookmark={(title, link) => {
            this.setState({bookmarks: [new Bookmark(title, link), ...this.state.bookmarks]})
          }} />
        </section>
        <section>
          <h2 className="text-white mt-4">Bookmarks</h2>
          {this.state.bookmarksLoading && <img src={loader} />}
          {this.state.bookmarks.length === 0 && <p className="text-white font-italic">No bookmarks yet.</p>}
          {this.state.bookmarks.map(bookmark =>
            <BookmarkCard key={shortid.generate()} title={bookmark.title} link={bookmark.link} />)}
        </section>
      </section>
    )
  }
}