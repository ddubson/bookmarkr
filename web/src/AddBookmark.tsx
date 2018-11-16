import {ChangeEvent, PureComponent} from "react";
import * as React from "react";

interface AddBookmarkProps {
  addBookmark: (bookmarkTitle: string, bookmarkLink: string) => void;
}

interface AddBookmarkState {
  bookmarkTitle: string;
  bookmarkLink: string;
}

export default class AddBookmark extends PureComponent<AddBookmarkProps, AddBookmarkState> {
  constructor(props: AddBookmarkProps) {
    super(props);

    this.state = {
      bookmarkTitle: "",
      bookmarkLink: "",
    }
  }

  render() {
    return (
      <article>
        <div className={"card"}>
          <div className={"card-body"}>
            <form onSubmit={(event) => {
              event.preventDefault();
              this.props.addBookmark(this.state.bookmarkTitle, this.state.bookmarkLink);
            }}>
              <div className={"input-group mb-3"}>
                <label htmlFor="bookmarkTitle" className={"mr-2"}>Title</label>
                <input type="text" data-test="bookmark-title" name="bookmarkTitle"
                       value={this.state.bookmarkTitle} onChange={(e) => {
                  this.setState({bookmarkTitle: e.target.value})
                }}/>
              </div>

              <div className={"input-group mb-3"}>
                <label htmlFor="bookmarkLink" className={"mr-2"}>Link</label>
                <input type="text" data-test="bookmark-link" name="bookmarkLink"
                       value={this.state.bookmarkLink} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  this.setState({bookmarkLink: e.target.value})
                }}/>
              </div>

              <input type="submit" value="Add Bookmark" data-test="bookmark-save"/>
            </form>
          </div>
        </div>
      </article>
    )
  }
}