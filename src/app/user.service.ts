import {Injectable, Output, EventEmitter} from '@angular/core';


@Injectable()
export class UserService {
    private user:string;

    constructor() {
        console.log("USER SERVICEEE::", localStorage.getItem('usuario'))
         this.userChangeEvent.emit(this.user);
    }

    @Output() userChangeEvent: EventEmitter<string> = new EventEmitter(true);


    getData() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    setUser(user:string) {
        localStorage.setItem('usuario', user);
        this.user = user;
        console.log("ENVIANDO EVENTO")
        this.userChangeEvent.emit(user);
    }

    getUser():string {
        return localStorage.getItem('usuario');
    }
}