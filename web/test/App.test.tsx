import * as React from "react";
import App, {AppProps} from "../src/App";
import {mount, ReactWrapper} from "enzyme";
import Book from "../src/books/Book";

describe("App", () => {
  let wrapper: ReactWrapper;
  const books = [new Book("Title", "Author")];
  const props: AppProps = {
    getAllBooks: (): Promise<Book[]> => Promise.resolve(books),
  };

  beforeEach(() => {
    wrapper = mount(<App {...props} />);
  });

  it("should render 'Book Store' title", () => {
    expect(wrapper.find("[data-test='page-title']").text()).toEqual("A Simple Book Store")
  });
});
