import {Component} from 'angular2/core';
import {SignupComponent} from './components/signup/signup';
import {LoginComponent} from './components/login/login';
import {HomeComponent} from './components/home/home';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {SignupService} from './components/signup/signupService';
import {LoginService} from './components/login/loginService';

@Component({
    selector: 'my-app',
    template: `
     <nav class="navbar navbar-default">
        <a [routerLink]="['Home']">Home</a>
        <a [routerLink]="['Login']">Login</a>
        <a [routerLink]="['Signup']">Signup</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives:[HomeComponent,ROUTER_DIRECTIVES],
    providers:[SignupService, LoginService]
})

@RouteConfig([
  {path:'/home', name: 'Home', component: HomeComponent, useAsDefault:true},
  {path:'/login', name: 'Login', component: LoginComponent},
  {path:'/signup', name: 'Signup', component: SignupComponent},
])

export class AppComponent { }