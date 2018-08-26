import * as React from "react";
import { mount } from "enzyme";
import BookStoreApp from "../src/BookStoreApp";

describe("BookStoreApp", () => {
  it("should render Hello World", () => {
    const wrapper = mount(<BookStoreApp/>);
    expect(wrapper.find("[id='test']").text()).toContain("Hello World")
  });
});