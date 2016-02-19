System.register(['angular2/core', './components/signup/signup', './components/login/login', './components/home/home', 'angular2/router', './components/signup/signupService', './components/login/loginService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, signup_1, login_1, home_1, router_1, signupService_1, loginService_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (signup_1_1) {
                signup_1 = signup_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (signupService_1_1) {
                signupService_1 = signupService_1_1;
            },
            function (loginService_1_1) {
                loginService_1 = loginService_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n     <nav class=\"navbar navbar-default\">\n        <a [routerLink]=\"['Home']\">Home</a>\n        <a [routerLink]=\"['Login']\">Login</a>\n        <a [routerLink]=\"['Signup']\">Signup</a>\n    </nav>\n    <router-outlet></router-outlet>\n    ",
                        directives: [home_1.HomeComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [signupService_1.SignupService, loginService_1.LoginService]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_1.HomeComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_1.LoginComponent },
                        { path: '/signup', name: 'Signup', component: signup_1.SignupComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
