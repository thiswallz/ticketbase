import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpClient } from '../http-client';
import { AppConfig } from '../app.config';
 
@Injectable()
export class RastrearService {
    constructor(private http: HttpClient, private config: AppConfig) { 
        this.http = http;
    }
 
    getFormulario(id: string) {
        var headers = new Headers();
        let body = new URLSearchParams();
        body.set('ID', id);

        return this.http.post(this.config.apiUrl + 'General/ObtieneFormulario', body)
            .map((response: Response) => {
                let d = response.json();
                return d;
            });
    }


}
