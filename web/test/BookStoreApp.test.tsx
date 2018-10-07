import * as React from "react";
import BookStoreApp, {BookStoreAppProps} from "../src/BookStoreApp";
import {mount, ReactWrapper} from "enzyme";
import Book from "../src/books/Book";

describe("BookStoreApp", () => {
  let wrapper: ReactWrapper;
  const books = [new Book("Title", "Author")];
  const props: BookStoreAppProps = {
    getAllBooks: (): Promise<Book[]> => Promise.resolve(books),
  };

  beforeEach(() => {
    wrapper = mount(<BookStoreApp {...props} />);
  });

  it("should render 'Book Store' title", () => {
    expect(wrapper.find("[data-test='page-title']").text()).toEqual("Book Store")
  });

  describe("on initial render", () => {
    it("should render all books", () => {
      wrapper.update();
      expect(wrapper.find("ProductCard").text()).toEqual("Title - Author");
    });
  });
});
