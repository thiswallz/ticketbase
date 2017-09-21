import { Component, Input } from '@angular/core';
import { default as swal } from 'sweetalert2';
import { AppConfig } from './app.config';
import {UserService} from "./user.service";
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app worksss!';
  usuario: string;

  constructor(private userService:UserService, private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit() {
    console.log("RECIBIENDO EVENTO")
    this.userService.userChangeEvent.subscribe(user => this.selectedUserEventHandler(user));
    this.usuario = this.userService.getUser();

  }

  salir(){
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

  selectedUserEventHandler(user:string) {
    console.log("SETENADO USUARIO: ", user)
     this.usuario = user;
  }

  openContacto(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Siguiente &rarr;',
      showCancelButton: true,
      animation: false,
      progressSteps: ['1', '2', '3']
    })

    var steps = [
      {
        title: 'Ingrese su nombre!',
        text: 'Lo ayudamos? Lo contactaremos'
      },
      'Teléfono',
      'Observación'
    ]

    swal.queue(steps).then(function (result) {
      swal.resetDefaults()
      swal(
        'Gracias!',
        'Pronto se comunicaran con usted',
        'success'
      )
    }, function () {
      swal.resetDefaults()
    })
  }

}
