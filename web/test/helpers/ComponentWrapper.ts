import {ReactWrapper} from "enzyme";

export class ComponentWrapper {
  private component: ReactWrapper;

  constructor(component: ReactWrapper) {
    this.component = component;
  }

  public find(selector: string) {
    return this.component.find(selector);
  }

  public button(buttonSelector: string) {
    const button = this.component.find(buttonSelector).first();
    return {
      click() {
        button.simulate("click");
      },

      submit() {
        button.simulate("submit");
      },
    };
  }

  public input(inputSelector: string) {
    const input = this.component.find(inputSelector).first();

    return {
      content(value: string) {
        input.simulate("change", {target: {value}});
      },
    };
  }

}
