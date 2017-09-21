import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpClient } from '../http-client';
import { AppConfig } from '../app.config';
 
@Injectable()
export class TicketService {
    constructor(private http: HttpClient, private config: AppConfig) { 
        this.http = http;
    }
 
    getRegionesAll() {
        var headers = new Headers();
        let body = new URLSearchParams();
        return this.http.post(this.config.apiUrl + 'General/ObtieneRegiones', body)
            .map((response: Response) => {
                let d = response.json();
                return d;
            });
    }

    getTipoTicketAll() {
        var headers = new Headers();
        let body = new URLSearchParams();
        return this.http.post(this.config.apiUrl + 'General/ObtieneTipoTicket', body)
            .map((response: Response) => {
                let d = response.json();
                return d;
            });
    }

    getProductosAll() {
        var headers = new Headers();
        let body = new URLSearchParams();
        return this.http.post(this.config.apiUrl + 'General/ObtieneProducto', body)
            .map((response: Response) => {
                let d = response.json();
                return d;
            });
    }

    getIncidenciaAll() {
        var headers = new Headers();
        let body = new URLSearchParams();
        return this.http.post(this.config.apiUrl + 'General/ObtieneIncidencia', body)
            .map((response: Response) => {
                let d = response.json();
                return d;
            });
    }

    getComunasAll(idRegion: string) {
        var headers = new Headers();
        let body = new URLSearchParams();
        body.set('ID_REGION', idRegion);

        return this.http.post(this.config.apiUrl + 'General/ObtieneComunas', body)
            .map((response: Response) => {
                let d = response.json();
                return d;
            });
    }
}
