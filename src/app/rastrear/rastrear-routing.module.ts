import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRastrear }    from './rastrear.component';
import { AuthGuard } from '../app-auth.guard';

const rastrearRoutes: Routes = [
  { path: 'rastrear',  component: AppRastrear, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(rastrearRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RastrearRoutingModule { }
