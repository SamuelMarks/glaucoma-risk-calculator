"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ServerStatusComponent = (function () {
    function ServerStatusComponent(serverStatusService) {
        this.serverStatusService = serverStatusService;
        this.serverStatus = {};
    }
    ServerStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverStatusService.get().then(function (serverStatus) { return _this.serverStatus = { version: "API version: " + serverStatus.version }; }).catch(function (error) { return _this.serverStatus = { version: 'API server not available' }; });
    };
    return ServerStatusComponent;
}());
__decorate([
    core_1.Input()
], ServerStatusComponent.prototype, "serverStatus", void 0);
ServerStatusComponent = __decorate([
    core_1.Component({
        selector: 'app-api-version',
        templateUrl: './server-status.component.html',
        styleUrls: ['./server-status.component.css']
    })
], ServerStatusComponent);
exports.ServerStatusComponent = ServerStatusComponent;
