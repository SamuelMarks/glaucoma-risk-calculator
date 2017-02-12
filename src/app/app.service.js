"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AppService = (function () {
    function AppService() {
        this._navbarPadding = 0;
        this.navbarPadding$ = new rxjs_1.BehaviorSubject(this._navbarPadding);
        this.navbarPaddingChange = new rxjs_1.Subject();
        //this.navbarPadding = this._navbarPadding;
    }
    Object.defineProperty(AppService.prototype, "navbarPadding", {
        get: function () {
            return this._navbarPadding;
        },
        set: function (val) {
            this._navbarPadding = val;
            this.navbarPadding$.next(this._navbarPadding);
        },
        enumerable: true,
        configurable: true
    });
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable()
], AppService);
exports.AppService = AppService;
