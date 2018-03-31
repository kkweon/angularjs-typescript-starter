import {
  StateProvider,
  Ng1StateDeclaration,
  UrlRouterProvider,
} from "@uirouter/angularjs";
import html from "./root.template.html";

router.$inject = ["$stateProvider", "$urlRouterProvider"];
export default function router(
  $stateProvider: StateProvider,
  $urlRouterProvider: UrlRouterProvider
) {
  const homeState: Ng1StateDeclaration = {
    name: "root",
    url: "/",
    template: html,
  };

  $stateProvider.state(homeState);

  $urlRouterProvider.when("", "/");
}
