import {ReactWrapper} from "enzyme";

export class ComponentWrapper {
  private _component: ReactWrapper;

  constructor(component: ReactWrapper) {
    this._component = component;
  }

  find(selector: string) {
    return this._component.find(selector);
  }

  button(buttonSelector: string) {
    const button = this._component.find(buttonSelector).first();
    return {
      click() {
        button.simulate("click");
      }
    }
  }

  input(input: ReactWrapper) {
    return {
      content(value: string) {
        input.simulate("change", {target: {value}})
      }
    }
  }

}
