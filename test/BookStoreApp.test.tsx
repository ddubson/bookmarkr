import * as React from "react";
import BookStoreApp from "../src/BookStoreApp";
import {createRender} from "@material-ui/core/test-utils";

describe("BookStoreApp", () => {
  let wrapper: Cheerio;

  beforeEach(() => {
    wrapper = createRender()(<BookStoreApp />);
  });

  it("should render 'Book Store' title", () => {
    expect(wrapper.find("[data-test='test']").text()).toContain("Book Store")
  });
});