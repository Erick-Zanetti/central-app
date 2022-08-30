import { Application, registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();

registerApplication(
  '@central-app/financial-management',
  (() => System.import('@central-app/financial-management')) as Application<{}>,
  location => location.pathname.startsWith('/financial-management'),
);

start();
