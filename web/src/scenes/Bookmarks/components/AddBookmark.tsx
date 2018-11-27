import {ChangeEvent, FormEvent, PureComponent} from "react";
import * as React from "react";
import ErrorBanner from "../../../components/ErrorBanner";
import Bookmark from "../Bookmark";

interface AddBookmarkProps {
  addBookmark: (bookmark: Bookmark) => void;
}

interface AddBookmarkState {
  bookmarkTitle: string;
  bookmarkContent: string;
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
      bookmarkContent: "",
      bookmarkLink: "",
      bookmarkTitle: "",
      error: {
        display: false,
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setContent = this.setContent.bind(this);
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
                <input type="text" data-test="input-bookmark-title" name="bookmarkTitle"
                       value={this.state.bookmarkTitle} onChange={this.setTitle}/>
              </div>

              <div className={"input-group mb-3"}>
                <label htmlFor="bookmarkContent" className={"mr-2"}>Text</label>
                <input type="text" data-test="input-bookmark-content" name="bookmarkContent"
                       value={this.state.bookmarkContent} onChange={this.setContent}/>
              </div>

              <div className={"input-group mb-3"}>
                <label htmlFor="bookmarkLink" className={"mr-2"}>Link</label>
                <input type="text" data-test="input-bookmark-link" name="bookmarkLink"
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

  private setContent(e: ChangeEvent<HTMLInputElement>) {
    this.setState({bookmarkContent: e.target.value});
  }

  private onSubmit(event: FormEvent<HTMLFormElement>): void {
    this.submit(event, (title: string, content: string, link: string) => {
      this.props.addBookmark(new Bookmark(title, content, link));
    }, (errorMessage: string) => {
      this.setError(errorMessage);
    });
  }

  private submit(event: FormEvent<HTMLFormElement>,
                 onSubmit: (title: string, content: string, link: string) => void,
                 onError: (errorMessage: string) => void) {
    event.preventDefault();
    const {bookmarkTitle: title, bookmarkContent: content, bookmarkLink: link} = this.state;

    const titleIsEmpty = !title || title.length === 0;

    if (titleIsEmpty) {
      onError("Title is a required field.");
    } else {
      this.clearAllErrors();
      onSubmit(title, content, link);
    }
  }

  private setError(errorText: string): void {
    this.setState({error: {display: true, message: errorText}});
  }

  private clearAllErrors(): void {
    this.setState({error: {display: false, message: undefined}});
  }
}
