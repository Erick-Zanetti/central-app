import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCardComponent } from './shared/main-card/main-card.component';

const routes: Routes = [
  { path: 'main', component: MainCardComponent },
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
