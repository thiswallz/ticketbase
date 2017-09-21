import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTicket }    from './ticket.component';
import { AuthGuard } from '../app-auth.guard';

const ticketRoutes: Routes = [
  { path: 'ticket',  component: AppTicket, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ticketRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TicketRoutingModule { }
