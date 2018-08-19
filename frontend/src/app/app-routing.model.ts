import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ AppComponent } from './app.component';
import {ErrorPageComponent} from './error-page/error-page.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [{
      path: ':code',
      component: AppComponent,
    }]
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


