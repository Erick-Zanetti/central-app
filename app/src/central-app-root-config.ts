import { Application, registerApplication, start } from "single-spa";
import { activeWhen, routes } from "./routes";

registerApplication({
  name: '@central-app/app-financial-management',
  app: (() => System.import('@central-app/app-financial-management')) as Application<{}>,
  activeWhen: location => activeWhen(location, routes.FINANCIAL_MANAGEMENT),
});

registerApplication({
  name: '@central-app/app-home',
  app: (() => System.import('@central-app/app-home')) as Application<{}>,
  activeWhen: location => activeWhen(location, routes.HOME),
});

registerApplication({
  name: '@central-app/app-to-do-list',
  app: (() => System.import('@central-app/app-to-do-list')) as Application<{}>,
  activeWhen: location => activeWhen(location, routes.TODO_LIST),
});

registerApplication({
  name: '@central-app/app-portfolio',
  app: (() => System.import('@central-app/app-portfolio')) as Application<{}>,
  activeWhen: location => activeWhen(location, routes.PORTFOLIO),
});

registerApplication({
  name: '@central-app/app-typing',
  app: (() => System.import('@central-app/app-typing')) as Application<{}>,
  activeWhen: location => activeWhen(location, routes.TYPING),
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
