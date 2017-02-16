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
var rxjs_1 = require("rxjs");
var AuthService = AuthService_1 = (function () {
    function AuthService(http, router, alertsService) {
        this.http = http;
        this.router = router;
        this.alertsService = alertsService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    AuthService.prototype.isLoggedIn = function () {
        console.info('this.getAccessToken() =', this.accessToken);
        return !!this.accessToken;
    };
    AuthService.prototype.redirUnauth = function (redirect_uri) {
        var _this = this;
        if (this.isLoggedIn())
            return;
        this.redirect_uri = redirect_uri;
        this.router.navigate(['login-signup']).then(function (success) { return success ? console.info('state changed') : _this.alertsService.alerts.push({ msg: 'state didn\'t change', type: 'warning' }); }, function (err) { return _this.alertsService.alerts.push({ msg: err, type: 'danger' }); });
    };
    Object.defineProperty(AuthService.prototype, "accessToken", {
        get: function () {
            this._accessToken = this._accessToken ? this._accessToken : localStorage.getItem('access-token');
            return this._accessToken;
        },
        set: function (val) {
            this._accessToken = !!val ? val : this._accessToken;
            localStorage.setItem('access-token', this.accessToken);
        },
        enumerable: true,
        configurable: true
    });
    /*
     post(user: User): Promise<Response> {
     console.info('auth.service::POST with:', JSON.stringify(user), 'and', {headers: this.headers});
     return this.http.post('/api/auth', JSON.stringify(user), {headers: this.headers})
     .toPromise()
     .then((response: Response) => {
     console.info("? got this far");
     this.accessToken = response.headers.get('x-access-token');
     return response;
     })
     .catch(Promise.reject)
     }
     */
    AuthService.prototype.post = function (user) {
        var _this = this;
        var options = new http_1.RequestOptions({ headers: this.headers });
        return this.http.post('/api/auth', JSON.stringify(user), options)
            .map(function (response) {
            _this.accessToken = response.headers.get('x-access-token');
            return response;
        })
            .map(AuthService_1.extractData)
            .catch(AuthService_1.handleError);
    };
    AuthService.prototype.del = function () {
        var _this = this;
        var logout = function () {
            _this.accessToken = null;
            delete _this._accessToken;
            localStorage.removeItem('access-token');
        };
        if (this.headers.has('x-access-token'))
            this.headers.delete('x-access-token');
        this.headers.append('x-access-token', this.accessToken);
        if (!this.headers.get('x-access-token'))
            return rxjs_1.Observable.throw('No access token');
        var options = new http_1.RequestOptions({ headers: this.headers });
        return this.http.delete('/api/auth', options)
            .map(function (response) {
            if (response.status === 204) {
                logout();
            }
            else {
                rxjs_1.Observable.throw(new Error("Expected response.status of 204 got " + response.status + ".\n           Body: " + response.text()));
            }
            return response;
        })
            .catch(function (error) {
            logout();
            console.error(error.json());
            return AuthService_1.handleError(error);
        });
    };
    AuthService.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    AuthService.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs_1.Observable.throw(errMsg);
    };
    return AuthService;
}());
AuthService = AuthService_1 = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
var AuthService_1;
