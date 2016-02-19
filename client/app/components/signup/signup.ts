import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from "angular2/common";
import {SignupService} from "./signupService";
@Component({
    selector: 'signup',
    templateUrl: './app/components/signup/signup.html',
    directives:[FORM_DIRECTIVES]
})

export class SignupComponent {
    resObj:any;
    message:string;
    
    constructor(private signupService:SignupService){}
    
    onSubmit(user:any):void{
        console.log('submit '+JSON.stringify(user));
        this.signupService.createUser(user)
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
                    console.info('Success')
                }
        );
    }
    
}