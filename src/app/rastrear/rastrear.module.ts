import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppRastrear }    from './rastrear.component';

import { RastrearRoutingModule } from './rastrear-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RastrearRoutingModule
  ],
  declarations: [
    AppRastrear
  ],
  providers: [ /*HeroService*/ ]
})
export class RastrearModule {}
