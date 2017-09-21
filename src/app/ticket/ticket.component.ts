import { Component } from '@angular/core';
import { AppConfig } from '../app.config';
import { default as swal } from 'sweetalert2';
import {TicketService } from './ticket.service';
import { FormsModule } from '@angular/forms';
import {UserService} from "../user.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class AppTicket{
  model: any = {};
  route: string = "";
  title = 'app worksss!';
  regiones = [];
  comunas = [];
  tipoTickets = [];
  productos = [];
  incidencias = [];


  constructor(private userService:UserService, private config: AppConfig, private ticketService: TicketService) { 
    console.log("init 1")
    this.route = config.apiUrl;
    this.model['USUARIO'] = userService.getData()['data']['user_id'];

  } 

  ngOnInit() {
    console.log("init 2");

    this.ticketService.getRegionesAll().subscribe(data => {
      console.log("DATOS REG: ", data)
      this.regiones = data['data'];
    })
    this.ticketService.getProductosAll().subscribe(data => {
      console.log("DATOS productos: ", data)
      this.productos = data['data'];
    })
    this.ticketService.getTipoTicketAll().subscribe(data => {
      console.log("DATOS tipoTickets: ", data)
      this.tipoTickets = data['data'];
    })
    this.ticketService.getIncidenciaAll().subscribe(data => {
      console.log("DATOS tipoTickets: ", data)
      this.incidencias = data['data'];
    })

  }

  callComunas = function(event){
    this.ticketService.getComunasAll(this.model.region.ID_REGION).subscribe(data => {
      console.log("DATOS COM: ", data)
      this.comunas = data['data'];
    })
  }
  

  ingresar() {
    if(AppConfig.validaRut(this.model.rut)==false){
      swal({
        title: 'Error!',
        text: 'Por favor ingresar rut válido',
        type: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }
    if(AppConfig.validaMail(this.model.email)==false){
      swal({
        title: 'Error!',
        text: 'Por favor ingresar mail válido',
        type: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }

    (<HTMLFormElement>document.getElementById('idformticketg')).submit();

  }

}
