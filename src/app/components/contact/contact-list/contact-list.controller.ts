import { IComponentController } from "angular";
import ContactService, { IContact } from "../contact.service";

export default class Controller implements IComponentController {
  public contacts: IContact[];

  constructor(private contactService: ContactService) {
    this.contacts = [];
  }
  $onInit() {
    this.contacts = this.contactService.getContacts();
  }
}
