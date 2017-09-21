import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpClient } from './http-client';
import { AppConfig } from './app.config';
import {UserService} from "./user.service";
 
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private config: AppConfig, private userService:UserService) { 
        this.http = http;
    }
 
    login(username: string, password: string) {
        var headers = new Headers();
        let body = new URLSearchParams();
        body.set('User', username);
        body.set('Pass', password);

        return this.http.post(this.config.apiUrl + 'Account/Ingresar', body)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let d = response.json();
                if(AppConfig.DEBUG_MODE==false){
                    if (d['success']==true) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(d));
                        console.log("PROD MODE")
                    }
                }else{
                        localStorage.setItem('currentUser', JSON.stringify(d));
                        console.log("DEBUG MODE")  
                }
                return d;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('user');
        this.userService.setUser(null)
    }
}