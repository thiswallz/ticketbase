import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLogin }    from './login.component';

const appRoutes: Routes = [
  { path: 'login',  component: AppLogin }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
