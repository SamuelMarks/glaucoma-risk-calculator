"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AlertComponent = (function () {
    function AlertComponent(alertsService) {
        this.alertsService = alertsService;
        this.type = 'warning';
    }
    AlertComponent.prototype.closeAlert = function (i) {
        this.alertsService.alerts.splice(i, 1);
    };
    AlertComponent.prototype.addAlert = function () {
        this.alertsService.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    AlertComponent.prototype.ngOnInit = function () {
        this.alerts = this.alertsService.alerts;
    };
    __decorate([
        core_1.Input()
    ], AlertComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input()
    ], AlertComponent.prototype, "dismissible", void 0);
    __decorate([
        core_1.Input()
    ], AlertComponent.prototype, "dismissOnTimeout", void 0);
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'app-alerts',
            templateUrl: './alerts.component.html',
            styleUrls: ['./alerts.component.css']
        })
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
