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
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loggedIn = false;
        this.signInUrl = 'http://localhost:1111/api/v1/user/signin';
        this.logOutUrl = 'http://localhost:1111/api/v1/user/logout';
        this.registrationUrl = 'http://localhost:1111/api/v1/user';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' });
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.register = function (user) {
        return this.http.post(this.registrationUrl, user, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.signInUrl, user, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
                localStorage.setItem('auth_token', res.token);
                _this.loggedIn = true;
            }
            return res;
        });
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        //hack to get browser to forget the original auth header else it just keeps using the same one.
        window.location.href = 'http://localhost:3000/';
    };
    UserService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('auth_token');
        return this.loggedIn && !this.jwtHelper.isTokenExpired(token);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map