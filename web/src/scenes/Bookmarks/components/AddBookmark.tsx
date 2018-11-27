import {ChangeEvent, FormEvent, PureComponent} from "react";
import * as React from "react";
import ErrorBanner from "../../../components/ErrorBanner";
import Bookmark from "../Bookmark";

interface AddBookmarkProps {
  addBookmark: (bookmark: Bookmark) => void;
}

interface AddBookmarkState {
  bookmarkTitle: string;
  bookmarkLink: string;
  error: {
    display: boolean;
    message?: string;
  };
}

export default class AddBookmark extends PureComponent<AddBookmarkProps, AddBookmarkState> {
  constructor(props: AddBookmarkProps) {
    super(props);

    this.state = {
      bookmarkLink: "",
      bookmarkTitle: "",
      error: {
        display: false,
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setLink = this.setLink.bind(this);
  }

  public render() {
    return (
      <article>
        <div className={"card"}>
          <div className={"card-body"}>
            {this.state.error.display && <ErrorBanner errorMessage={this.state.error.message}/>}
            <form onSubmit={this.onSubmit}>
              <div className={"input-group mb-3"}>
                <label htmlFor="bookmarkTitle" className={"mr-2"}>Title</label>
                <input type="text" data-test="bookmark-title" name="bookmarkTitle"
                       value={this.state.bookmarkTitle} onChange={this.setTitle}/>
              </div>

              <div className={"input-group mb-3"}>
                <label htmlFor="bookmarkLink" className={"mr-2"}>Link</label>
                <input type="text" data-test="bookmark-link" name="bookmarkLink"
                       value={this.state.bookmarkLink} onChange={this.setLink}/>
              </div>

              <input type="submit" className="btn btn-primary" value="Add Bookmark" data-test="bookmark-save"/>
            </form>
          </div>
        </div>
      </article>
    );
  }

  private setTitle(e: ChangeEvent<HTMLInputElement>) {
    this.setState({bookmarkTitle: e.target.value});
  }

  private setLink(e: ChangeEvent<HTMLInputElement>) {
    this.setState({bookmarkLink: e.target.value});
  }

  private onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const {bookmarkTitle: title, bookmarkLink: link} = this.state;

    if (!title || title.length === 0) {
      this.setError("Title is a required field.");
      return;
    }

    this.clearAllErrors();
    this.props.addBookmark(new Bookmark(title, link));
  }

  private setError(errorText: string): void {
    this.setState({error: {display: true, message: errorText}});
  }

  private clearAllErrors(): void {
    this.setState({error: {display: false, message: undefined}});
  }
}
