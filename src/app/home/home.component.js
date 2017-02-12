"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent(appService) {
        this.appService = appService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbarPadding = this.appService.navbarPadding;
        this.subNavbarPadding = this.appService.navbarPaddingChange.subscribe(function (value) {
            return _this.navbarPadding = value;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subNavbarPadding.unsubscribe();
    };
    HomeComponent.prototype.increase = function () {
        this.appService.navbarPadding += 50;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
