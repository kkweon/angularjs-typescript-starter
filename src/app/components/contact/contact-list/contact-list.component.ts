import { IComponentOptions, Injectable } from "angular";
import ContactListController from "./contact-list.controller";

export default class Component implements IComponentOptions {
  public controller: Injectable<any>;

  constructor() {
    this.controller = ContactListController;
  }
}
