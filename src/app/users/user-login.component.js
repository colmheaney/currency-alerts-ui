"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var user_service_1 = require('../users/user.service');
var UserLoginComponent = (function () {
    function UserLoginComponent(router, userService, builder) {
        this.router = router;
        this.userService = userService;
        this.builder = builder;
        this.submitAttempt = false;
        this.message = '';
        this.email = new forms_1.FormControl('', forms_1.Validators.required);
        this.password = new forms_1.FormControl('', forms_1.Validators.required);
    }
    UserLoginComponent.prototype.loginUser = function (user) {
        var _this = this;
        this.submitAttempt = true;
        if (this.loginForm.valid) {
            this.userService.login(user)
                .subscribe(function (data) { return _this.router.navigate(['alerts']); }, function (error) { return _this.handleError(error); });
        }
    };
    UserLoginComponent.prototype.ngOnInit = function () {
        if (this.userService.isLoggedIn()) {
            this.router.navigate(['alerts']);
        }
        this.loginForm = this.builder.group({
            email: this.email,
            password: this.password
        });
    };
    UserLoginComponent.prototype.handleError = function (error) {
        this.message = 'Please try again.';
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/users/user-login.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, forms_1.FormBuilder])
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;
//# sourceMappingURL=user-login.component.js.map