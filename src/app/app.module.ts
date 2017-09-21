import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ButtonModule, ToolbarModule, SplitButtonModule } from 'primeng/primeng';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { TicketModule } from './ticket/ticket.module';
import { RastrearModule } from './rastrear/rastrear.module';
import { LoginModule } from './login/login.module';
import { AuthenticationService } from './authentication.service';
import { UsuariosRAMService } from './login/login.service';
import { AppConfig } from './app.config';
import { AuthGuard } from './app-auth.guard';
import { HttpClient } from './http-client';
import { Router } from '@angular/router';
import {TicketService } from './ticket/ticket.service';
import { RastrearService } from './rastrear/rastrear.service';
import {UserService} from "./user.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    TicketModule,
    LoginModule,
    RastrearModule
  ],
  providers: [
    AppConfig,
    AuthGuard,
    AuthenticationService,
    UserService,
    HttpClient,
    UsuariosRAMService,
    TicketService,
    RastrearService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
