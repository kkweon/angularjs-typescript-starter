import * as angular from "angular";
import contactComponent from "./contact.component";
import ContactListComponent from "./contact-list/contact-list.component";

import uirouter from "@uirouter/angularjs";
import config from "./contact.config";

export default angular
  .module("contact", [uirouter])
  .component("contactList", new ContactListComponent())
  .component("contact", contactComponent)
  .config(config).name;
