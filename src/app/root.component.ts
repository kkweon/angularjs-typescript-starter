import template from "./root.template.html";

interface IMenu {
  state: string;
  name: string;
}
export default {
  template,
  controller: class Controller {
    public menus: IMenu[];

    constructor() {
      this.menus = [
        {
          state: "root",
          name: "Home",
        },
        {
          state: "root.contact",
          name: "Contact",
        },
      ];
    }
  },
};
