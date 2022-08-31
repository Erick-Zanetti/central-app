import { Application, registerApplication, start } from "single-spa";
import { activeWhen, routes } from "./routes";

registerApplication({
  name: '@central-app/financial-management',
  app: (() => System.import('@central-app/financial-management')) as Application<{}>,
  activeWhen: location => activeWhen(location, routes.FINANCIAL_MANAGEMENT),
});

registerApplication({
  name: '@central-app/home',
  app: (() => System.import('@central-app/home')) as Application<{}>,
  activeWhen: location => activeWhen(location, routes.HOME),
});

registerApplication({
  name: '@central-app/app-page-not-found',
  app: (() => System.import('@central-app/app-page-not-found')) as Application<{}>,
  activeWhen: location => {
    return !Object.keys(routes).some(v => {
      return activeWhen(location, routes[v]);
    });
  },
});

start();
