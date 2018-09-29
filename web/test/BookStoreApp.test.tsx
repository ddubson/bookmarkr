import * as React from "react";
import BookStoreApp, {BookStoreAppProps} from "../src/BookStoreApp";
import {createMount} from "@material-ui/core/test-utils";
import {ReactWrapper} from "enzyme";
import Book from "../src/books/Book";

describe("BookStoreApp", () => {
  let wrapper: ReactWrapper;
  const books = [new Book("Title", "Author")];
  const props: BookStoreAppProps = {
    getAllBooks: () => Promise.resolve(books),
  };

  beforeEach(() => {
    wrapper = createMount()(<BookStoreApp {...props} />);
  });

  it("should render 'Book Store' title", () => {
    expect(wrapper.find("[data-test='test']").text()).toContain("Book Store")
  });

  describe("on initial render", () => {
    it("should render all books", () => {
      console.log(wrapper.html());
      expect(wrapper.find("[data-test='product-card']").text()).toEqual("");
    });
  });
});
