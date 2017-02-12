"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var app_routes_1 = require("./app.routes");
var server_status_module_1 = require("./server-status/server-status.module");
var alerts_module_1 = require("./alerts/alerts.module");
var risk_quiz_module_1 = require("./risk-quiz/risk-quiz.module");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var footer_component_1 = require("./footer/footer.component");
var auth_service_1 = require("./api/auth/auth.service");
var auth_guard_service_1 = require("./api/auth/auth-guard.service");
var alerts_service_1 = require("./alerts/alerts.service");
var app_service_1 = require("./app.service");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, router_1.RouterModule.forRoot(app_routes_1.rootRoutes),
            platform_browser_1.BrowserModule, http_1.HttpModule, ng2_bootstrap_1.AlertModule, forms_1.FormsModule,
            server_status_module_1.ServerStatusModule, alerts_module_1.AlertsModule, risk_quiz_module_1.RiskQuizModule],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, footer_component_1.FooterComponent],
        providers: [auth_service_1.AuthService, auth_guard_service_1.AuthGuard, alerts_service_1.AlertsService, app_service_1.AppService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
