import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from "angular2/common";
import {LoginService} from "./loginService";

@Component({
    selector: 'login',
    templateUrl: './app/components/login/login.html'
})

export class LoginComponent {

    resObj:any;
    message:string;

    constructor(private loginService:LoginService){}

    onSubmit(user:any):void{
        console.log('submit '+JSON.stringify(user));
        this.loginService.loginUser(user)
            //.map(res => res.json())
            .subscribe(
                (res) =>{
                    this.resObj = res.json();
                    if(this.resObj.success){
                        this.message="We have sent you a registration email! Please follow the instructions sent to complete your registration process"
                    }
                    else {
                        throw this.resObj.message;
                    }
                },
                (err)=>{
                    //this.message = err
                    console.error('i am in ERROR! ',err)
                },
                ()=>
                {
                    localStorage.setItem('userToken',this.resObj.FirebaseToken)
                    console.info('Success')
                }
            );
    }
    
}