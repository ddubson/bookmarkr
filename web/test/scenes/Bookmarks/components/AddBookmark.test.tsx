import {ComponentWrapper} from "../../../helpers/ComponentWrapper";
import {mount} from "enzyme";
import * as React from "react";
import AddBookmark from "../../../../src/scenes/Bookmarks/components/AddBookmark";
import Bookmark from "../../../../src/scenes/Bookmarks/Bookmark";
import objectContaining = jasmine.objectContaining;

describe("AddBookmark", () => {
  let wrapper: ComponentWrapper;
  let addBookmarkFn: (bookmark: Bookmark) => void;

  beforeEach(() => {
    addBookmarkFn = jest.fn();
    wrapper = new ComponentWrapper(mount(<AddBookmark addBookmark={addBookmarkFn} />));
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
        expect(addBookmarkFn).toHaveBeenCalledWith(
          objectContaining({title: "hello", link: "http://example.com"}));
      });
    });
  });
});