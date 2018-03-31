import { StateProvider } from "@uirouter/angularjs";

config.$inject = ["$stateProvider"];
export default function config($stateProvider: StateProvider) {
  $stateProvider.state("root.contact", {
    url: "/contacts",
    component: "contact",
  });
}
