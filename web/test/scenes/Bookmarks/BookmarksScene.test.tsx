import {mount} from "enzyme";
import * as React from "react";
import {BookmarksScene} from "../../../src/scenes/Bookmarks/BookmarksScene";
import {ComponentWrapper} from "../../helpers/ComponentWrapper";

describe("BookmarksScene", () => {
  let wrapper: ComponentWrapper;

  beforeEach(() => {
    wrapper = new ComponentWrapper(mount(<BookmarksScene/>));
  });

  describe("when a bookmark is added", () => {
    beforeEach(() => {
      setBookmarkTitle("BookmarkTitle");
      setBookmarkContent("BookmarkContent");
      setBookmarkLink("BookmarkLink");
      clickAddBookmark();
    });

    it("should display bookmark's title", () => {
      const bookmarkTitle = wrapper.find("[data-test='bookmark-title']").text();
      expect(bookmarkTitle).toEqual("BookmarkTitle");
    });

    it("should display bookmark's content", () => {
      const bookmarkContent = wrapper.find("[data-test='bookmark-content']").text();
      expect(bookmarkContent).toEqual("BookmarkContent");
    });

    it("should display bookmark's link", () => {
      const bookmarkLink = wrapper.find("[data-test='bookmark-link']").text();
      expect(bookmarkLink).toEqual("BookmarkLink");
    });

  });

  function clickAddBookmark() {
    wrapper.button("[data-test='bookmark-save']").submit();
  }

  function setBookmarkContent(content: string): void {
    wrapper.input("[data-test='input-bookmark-content']").content(content);
  }

  function setBookmarkTitle(title: string): void {
    wrapper.input("[data-test='input-bookmark-title']").content(title);
  }

  function setBookmarkLink(link: string): void {
    wrapper.input("[data-test='input-bookmark-link']").content(link);
  }
});
