import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'other', component: AppComponent },
  { path: '',   redirectTo: '/ticket', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }) 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}