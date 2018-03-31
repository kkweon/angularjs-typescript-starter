import * as angular from "angular";
import uirouter from "@uirouter/angularjs";

import navbar from "./navbar/navbar.component";

export default angular.module("common", [uirouter]).component("navbar", navbar)
  .name;
