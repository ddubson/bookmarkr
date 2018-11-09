import Book from "../src/books/Book";
import {AppProps} from "../src/App";
import {mount, ReactWrapper} from "enzyme";
import * as React from "react";
import {AppBody} from "../src/AppBody";

describe("AppBody", () => {
  let wrapper: ReactWrapper;
  const books = [new Book("Title", "Author")];
  const props: AppProps = {
    getAllBooks: (): Promise<Book[]> => Promise.resolve(books),
  };

  beforeEach(() => {
    wrapper = mount(<AppBody {...props} />);
  });

  describe("on initial render", () => {
    it("should render all books", () => {
      wrapper.update();
      expect(wrapper.find(".card-body").length).toBeGreaterThan(0);
    });
  });
});