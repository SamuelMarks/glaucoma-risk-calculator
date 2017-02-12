"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var server_status_module_1 = require('./server-status/server-status.module');
var server_status_component_1 = require('./server-status/server-status.component');
var auth_guard_service_1 = require('./api/auth/auth-guard.service');
var auth_service_1 = require('./api/auth/auth.service');
var alert_1 = require('ng2-bootstrap/components/alert');
var alerts_component_1 = require('./alerts/alerts.component');
var alerts_service_1 = require('./alerts/alerts.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.default, http_1.HttpModule, server_status_module_1.default, alert_1.AlertModule],
            declarations: [app_component_1.AppComponent, server_status_component_1.ServerStatusComponent, alerts_component_1.AlertComponent],
            providers: [auth_service_1.AuthService, auth_guard_service_1.AuthGuard, alerts_service_1.AlertsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
