import * as React from "react";
import {PureComponent} from "react";
import * as shortid from "shortid";
import Bookmark from "../../scenes/Bookmarks/Bookmark";
import AddBookmark from "./components/AddBookmark";
import {BookmarkCard} from "./components/BookmarkCard";

const loader = require("../../scenes/Bookmarks/images/loader.svg");

export interface BookmarksSceneProps {
}

interface BookmarksSceneState {
  bookmarks: Bookmark[];
  bookmarksLoading: boolean;
}

export class BookmarksScene extends PureComponent<BookmarksSceneProps, BookmarksSceneState> {
  constructor(props: BookmarksSceneProps) {
    super(props);
    this.state = {
      bookmarks: [],
      bookmarksLoading: true,
    };

    this.addBookmark = this.addBookmark.bind(this);
    this.removeBookmark = this.removeBookmark.bind(this);
  }

  public componentDidMount(): void {
    this.setState({
      bookmarks: this.state.bookmarks,
      bookmarksLoading: false,
    });
  }

  public render() {
    return (
      <section className="app-body">
        <section>
          <AddBookmark
            addBookmark={this.addBookmark}
          />
        </section>
        <section>
          <h2 className="text-white mt-4">Bookmarks</h2>
          {this.state.bookmarksLoading && <img alt="bookmarkr-logo" src={loader} />}
          {this.state.bookmarks.length === 0 && <p className="text-white font-italic">No bookmarks yet.</p>}
          {this.state.bookmarks.map((bookmark) =>
            <BookmarkCard key={shortid.generate()}
                          id={bookmark.id}
                          title={bookmark.title}
                          link={bookmark.link}
                          removeBookmark={this.removeBookmark}
            />)}
        </section>
      </section>
    );
  }

  private addBookmark(bookmark: Bookmark) {
    this.setState({bookmarks: [bookmark, ...this.state.bookmarks]});
  }

  private removeBookmark(id: string) {
    this.setState({bookmarks: this.state.bookmarks.filter((bookmark) => bookmark.id !== id)});
  }
}
