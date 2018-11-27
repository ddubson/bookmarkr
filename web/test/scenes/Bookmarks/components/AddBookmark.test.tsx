import {mount} from "enzyme";
import * as React from "react";
import Bookmark from "../../../../src/scenes/Bookmarks/Bookmark";
import AddBookmark from "../../../../src/scenes/Bookmarks/components/AddBookmark";
import {ComponentWrapper} from "../../../helpers/ComponentWrapper";
import objectContaining = jasmine.objectContaining;
import resetAllMocks = jest.resetAllMocks;

describe("AddBookmark", () => {
  let wrapper: ComponentWrapper;
  let addBookmarkFn: (bookmark: Bookmark) => void;

  beforeEach(() => {
    addBookmarkFn = jest.fn();
    wrapper = new ComponentWrapper(mount(<AddBookmark addBookmark={addBookmarkFn}/>));
  });

  describe("when I enter a title and link", () => {
    beforeEach(() => {
      setBookmarkTitle("hello");
      setBookmarkLink("http://example.com");
    });

    describe("and click 'Add Bookmark'", () => {
      beforeEach(() => {
        clickAddBookmark();
      });

      it("should invoke add bookmark function", () => {
        expect(addBookmarkFn).toHaveBeenCalledWith(
          objectContaining({title: "hello", link: "http://example.com"}));
      });
    });
  });

  describe("when I do not enter a title", () => {
    beforeEach(() => {
      resetAllMocks();
      setBookmarkTitle("");
    });

    describe("and I enter a link", () => {
      beforeEach(() => {
        setBookmarkLink("http://example.com");
      });

      describe("and click 'Add Bookmark'", () => {
        beforeEach(() => {
          clickAddBookmark();
        });

        it("should not call add bookmark", () => {
          expect(addBookmarkFn).not.toHaveBeenCalled();
        });

        it("should display error message", () => {
          const errorMessage = wrapper.find("[data-test='error-banner']").text();
          expect(errorMessage).toEqual("Title is a required field.");
        });

        describe("when I enter a title to fix the issue", () => {
          beforeEach(() => {
            setBookmarkTitle("Hello");
            clickAddBookmark();
          });

          it("should remove error banner", () => {
            expect(wrapper.find("[data-test='error-banner']")).toHaveLength(0);
          });
        });
      });
    });
  });

  function clickAddBookmark() {
    wrapper.button("[data-test='bookmark-save']").submit();
  }

  function setBookmarkTitle(title: string): void {
    wrapper.input("[data-test='bookmark-title']").content(title);
  }

  function setBookmarkLink(link: string): void {
    wrapper.input("[data-test='bookmark-link']").content(link);
  }
});
