import { Application, registerApplication, start } from "single-spa";

registerApplication({
  name: '@central-app/financial-management',
  app: (() => System.import('@central-app/financial-management')) as Application<{}>,
  activeWhen: location => location.pathname.startsWith('/financial-management'),
});

registerApplication({
  name: '@central-app/home',
  app: (() => System.import('@central-app/home')) as Application<{}>,
  activeWhen: location => location.pathname.startsWith('/home') || location.pathname === "/" || location.pathname === "",
});

start();
