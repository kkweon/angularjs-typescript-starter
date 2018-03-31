import * as angular from "angular";
import uirouter from "@uirouter/angularjs";
import routes from "./root.config";
import rootComponent from "./root.component";
import common from "./common/common.module";
import components from "./components/components.module";

export default angular
  .module("root", [uirouter, common, components])
  .config(routes)
  .component("root", rootComponent).name;
