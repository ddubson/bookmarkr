import {ComponentWrapper} from "./ComponentWrapper";
import {mount} from "enzyme";
import * as React from "react";
import AddBookmark from "../src/AddBookmark";

describe("AddBookmark", () => {
  let wrapper: ComponentWrapper;
  let addBookmarkFn: (bookmarkTitle: string, bookmarkLink: string) => void;

  beforeEach(() => {
    addBookmarkFn = jest.fn();
    wrapper = new ComponentWrapper(mount(<AddBookmark addBookmark={addBookmarkFn}/>));
  });

  describe("when I enter a title and link", () => {
    beforeEach(() => {
      wrapper.input(wrapper.find("[data-test='bookmark-title']")).content("hello");
      wrapper.input(wrapper.find("[data-test='bookmark-link']")).content("http://example.com");
    });

    describe("and click 'Save'", () => {
      beforeEach(() => {
        wrapper.button("[data-test='bookmark-save']").submit();
      });

      it("should invoke add bookmark function", () => {
        expect(addBookmarkFn).toHaveBeenCalledWith("hello", "http://example.com");
      });
    });
  });
});