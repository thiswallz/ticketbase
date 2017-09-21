import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConfig } from '../app.config';
import { default as swal } from 'sweetalert2';
import { AuthenticationService } from '../authentication.service';
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AppLogin{
    model: any = {};
    loading = false;
    returnUrl: string;
    message: string;
 
    constructor(
        private route: ActivatedRoute,
        private userService:UserService,
        private router: Router,
        private authenticationService: AuthenticationService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    salir() {
        this.authenticationService.logout();
    }
    login() {
        this.loading = true;
        this.message = "";
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    if(AppConfig.DEBUG_MODE==false){
                        if (data['success']==true) {
                            AppConfig.USER_NAME = data['data']['user_name']
                        
                            console.log("INGRESANDO: ", AppConfig.USER_NAME)
                            this.userService.setUser(AppConfig.USER_NAME);
                            this.router.navigate(["/ticket"]);
                        }else{
                            swal({
                                title: 'Información',
                                text: 'Error al ingresar al sistema',
                                type: 'error',
                                confirmButtonText: 'Ok'
                            })
                            //this.message = "Error al ingresar";
                            this.loading = false;
                        }
                    }else{
                        AppConfig.USER_NAME = "Usuario Debug"
                        this.userService.setUser(AppConfig.USER_NAME);
                        console.log("INGRESANDO2: ", AppConfig.USER_NAME)
                        this.router.navigate(["/ticket"]);
                    }
                    //this.router.navigate(["/ticket"]);
                },
                error => {
                   // alert(error._body);
                    this.message = "Error al ingresar";
                    this.loading = false;
                });
    }
}
