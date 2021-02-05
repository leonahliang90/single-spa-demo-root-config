import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@leon/single-spa-demo-nav",
  () => System.import("@leon/single-spa-demo-nav"),
  isActive.nav
);

registerApplication(
  "@leon/single-spa-demo-page-1",
  () => System.import("@leon/single-spa-demo-page-1"),
  isActive.page1
);

registerApplication(
  "@leon/single-spa-demo-page-2",
  () => System.import("@leon/single-spa-demo-page-2"),
  isActive.page2
);

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@leon/navbar",
//   app: () => System.import("@leon/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
