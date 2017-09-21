import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppTicket }    from './ticket.component';

import { TicketRoutingModule } from './ticket-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TicketRoutingModule
  ],
  declarations: [
    AppTicket
  ],
  providers: [ /*HeroService*/ ]
})
export class TicketModule {}
