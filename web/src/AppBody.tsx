import {PureComponent} from "react";
import Book from "./books/Book";
import * as React from "react";
import shortid = require("shortid");

const loader = require("./images/loader.svg");
import AddBookmark from "./AddBookmark";
import firebase from "./firebase";

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
    const itemsRef = firebase.database().ref('bookmarks');
    itemsRef.on('value', (snapshot) => {
      let bookmarks = snapshot.val();
      let newState = [];
      for (let bookmark in bookmarks) {
        newState.push({
          id: bookmark,
          title: bookmarks[bookmark].title,
          link: bookmarks[bookmark].link
        });
      }
      this.setState({
        bookmarks: newState,
        bookmarksLoading: false,
      });
    });
  }

  render() {
    return (
      <section className="app-body">
        <section>
          <AddBookmark addBookmark={(title, link) => {
            let bookmark = new Bookmark(title, link);
            firebase.database().ref("bookmarks").push(bookmark);
            this.setState({bookmarks: [bookmark, ...this.state.bookmarks]})
          }}/>
        </section>
        <section>
          <h2>Bookmarks</h2>
          {this.state.bookmarksLoading && <img src={loader}/>}
          {this.state.bookmarks.map(bookmark => <div key={shortid.generate()}>{bookmark.title}: {bookmark.link}</div>)}
        </section>
      </section>
    )
  }
}