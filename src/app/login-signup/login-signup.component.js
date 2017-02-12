"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/observable/combineLatest");
require("rxjs/add/operator/filter");
var LoginSignupComponent = (function () {
    function LoginSignupComponent(router, authService, alertsService) {
        this.router = router;
        this.authService = authService;
        this.alertsService = alertsService;
    }
    LoginSignupComponent.prototype.onSubmit = function (user) {
        var _this = this;
        console.log('LoginSignupComponent::onSubmit::user =', user);
        debugger;
        this.authService.post(user).then(function (response) {
            if (!_this.authService.isLoggedIn()) {
                console.info("response.json() = ", JSON.stringify(response.json()));
                _this.alertsService.alerts.push({ msg: JSON.stringify(response.json()), type: 'warning' });
                return;
            }
            console.info("this.authService.getAccessToken() =", _this.authService.getAccessToken());
            _this.alertsService.alerts.push({ msg: "Logged in with " + _this.authService.getAccessToken(), type: 'success' });
            _this.router.navigate(['/contacts']);
        }).catch(function (error) { return _this.alertsService.alerts.push({ msg: error, type: 'danger' }); });
    };
    return LoginSignupComponent;
}());
__decorate([
    core_1.ViewChild('formRef')
], LoginSignupComponent.prototype, "form", void 0);
LoginSignupComponent = __decorate([
    core_1.Component({
        selector: 'app-login-signup',
        templateUrl: './login-signup.component.html',
        styleUrls: ['./login-signup.component.css']
    })
], LoginSignupComponent);
exports.LoginSignupComponent = LoginSignupComponent;
