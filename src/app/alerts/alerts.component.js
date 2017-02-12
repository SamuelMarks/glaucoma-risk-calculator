"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var AlertsComponent = (function () {
    function AlertsComponent(alertsService) {
        this.alertsService = alertsService;
        this.type = 'warning';
    }
    AlertsComponent.prototype.ngOnInit = function () {
        this.alerts = this.alertsService.alerts;
    };
    AlertsComponent.prototype.addAlert = function (alert) {
        this.alertsService.add(alert);
    };
    AlertsComponent.prototype.closeAlert = function (i) {
        this.alertsService.close(i);
    };
    return AlertsComponent;
}());
__decorate([
    core_1.Input()
], AlertsComponent.prototype, "type", void 0);
__decorate([
    core_1.Input()
], AlertsComponent.prototype, "dismissible", void 0);
__decorate([
    core_1.Input()
], AlertsComponent.prototype, "dismissOnTimeout", void 0);
AlertsComponent = __decorate([
    core_1.Component({
        selector: 'app-alerts',
        templateUrl: './alerts.component.html',
        providers: [ng2_bootstrap_1.AlertComponent],
        styleUrls: ['./alerts.component.css']
    })
], AlertsComponent);
exports.AlertsComponent = AlertsComponent;
