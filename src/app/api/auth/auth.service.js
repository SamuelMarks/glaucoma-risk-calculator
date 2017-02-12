"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    AuthService.prototype.isLoggedIn = function () {
        console.info('this.getAccessToken() =', this.getAccessToken());
        return !!this.getAccessToken();
    };
    AuthService.prototype.getAccessToken = function () {
        this.accessToken = this.accessToken ? this.accessToken : localStorage.getItem('access-token');
        return this.accessToken;
    };
    AuthService.prototype.setAccessToken = function (accessToken) {
        this.accessToken = !!accessToken ? accessToken : this.getAccessToken();
        localStorage.setItem('access-token', this.accessToken);
    };
    AuthService.prototype.logout = function () {
        delete this.accessToken;
        localStorage.removeItem('access-token');
    };
    AuthService.prototype.post = function (user) {
        var _this = this;
        return this.http.post('/api/auth', JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.setAccessToken(response.headers.get('x-access-token'));
            return response;
        })
            .catch(Promise.reject);
    };
    AuthService.prototype.del = function (accessToken) {
        var _this = this;
        var headers = this.headers;
        headers.append('x-access-token', accessToken);
        return this.http.delete('/api/auth', headers)
            .toPromise()
            .then(function (response) {
            if (response.status === 204)
                _this.logout();
            return response;
        })
            .catch(Promise.reject);
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
