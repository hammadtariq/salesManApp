import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from "angular2/http";

@Injectable()
export class LoginService{
    header: Headers;
    constructor(public http: Http) {
        this.header = new Headers();
        this.header.set('Content-Type', 'application/json');
    }

    loginUser(data){
        return this.http.post('/api/login', JSON.stringify({data:data}), {headers:this.header});
    }

}
