import { Component } from '@angular/core';
import { AppConfig } from '../app.config';
import { default as swal } from 'sweetalert2';
import {RastrearService } from './rastrear.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-rastrear',
  templateUrl: './rastrear.component.html',
  styleUrls: ['./rastrear.component.css']
})
export class AppRastrear{
  model: any = {};
  route: string = "";
  title = 'app worksss!';
  regiones = [];
  comunas = [];
  tipoTickets = [];
  productos = [];
  incidencias = [];


  constructor(private config: AppConfig, private rastrearService: RastrearService, private activatedRoute: ActivatedRoute) { 
    console.log("init 1")
    this.route = config.apiUrl;

  }

  ngOnInit() {
   this.activatedRoute.queryParams.subscribe((params: Params) => {
        let NTICKET = params['NTICKET'];
        if(NTICKET){
          this.model.codigo = NTICKET;
          swal({
            title: 'Muchas Gracias!',
            text: 'Se ha ingresado la solicitud, su número de solicitud es: '+ NTICKET,
            type: 'info',
            confirmButtonText: 'Ok'
          })
        }

      });
  }

  ingresar = function(){
    this.rastrearService.getFormulario(this.model.codigo).subscribe(data => {
      if(!data || !data.data){
        swal({
          title: 'Error!',
          text: 'No se encuentra el código en el Sistema',
          type: 'error',
          confirmButtonText: 'Ok'
        })
      }
      swal({
        title: 'Datos',
        html: 'Nombre: '+data.data[0].NOMBRE + '  Mail: '+data.data[0].EMAIL + "<br><br> Ante cualquier novedad recibirá un Llamado.",
        type: 'info',
        confirmButtonText: 'Ok'
      })
    })
  }

  back() {
   // console.log("FORM INIT");
   // (<HTMLFormElement>document.getElementById('idformRastrearg')).submit();

  }
}
