import { Application, registerApplication, start } from "single-spa";

registerApplication(
  '@central-app/financial-management',
  (() => System.import('@central-app/financial-management')) as Application<{}>,
  location => location.pathname.startsWith('/financial-management'),
);

registerApplication(
  '@central-app/home',
  (() => System.import('@central-app/home')) as Application<{}>,
  location => location.pathname.startsWith('/home') || location.pathname === "/" || location.pathname === "",
);


start();
