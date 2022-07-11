import { registerApplication, start } from "single-spa";

registerApplication({
  name: "angular-finance-control",
  app: () => System.import("angular-finance-control"),
  activeWhen: (location) => location.pathname.startsWith("/finance-control"),
});

registerApplication({
  name: "angular-investment-control",
  app: () => System.import("angular-investment-control"),
  activeWhen: (location) => location.pathname.startsWith("/investment-control"),
});

registerApplication({
  name: "angular-main",
  app: () => System.import("angular-main"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
