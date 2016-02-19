System.register(['angular2/core', "./loginService"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, loginService_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (loginService_1_1) {
                loginService_1 = loginService_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(loginService) {
                    this.loginService = loginService;
                }
                LoginComponent.prototype.onSubmit = function (user) {
                    var _this = this;
                    console.log('submit ' + JSON.stringify(user));
                    this.loginService.loginUser(user)
                        .subscribe(function (res) {
                        _this.resObj = res.json();
                        if (_this.resObj.success) {
                            _this.message = "We have sent you a registration email! Please follow the instructions sent to complete your registration process";
                        }
                        else {
                            throw _this.resObj.message;
                        }
                    }, function (err) {
                        //this.message = err
                        console.error('i am in ERROR! ', err);
                    }, function () {
                        localStorage.setItem('userToken', _this.resObj.FirebaseToken);
                        console.info('Success');
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: './app/components/login/login.html'
                    }), 
                    __metadata('design:paramtypes', [loginService_1.LoginService])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
