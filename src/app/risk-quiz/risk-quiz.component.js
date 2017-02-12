"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RiskQuizComponent = (function () {
    function RiskQuizComponent() {
        this.submitted = false;
        this.model = {};
        this.ocular_diseases = [
            'trauma', 'inflammation', 'pseudoexfoliation', 'pigment dispersion syndrome'
        ];
    }
    RiskQuizComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    RiskQuizComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    /*constructor(private componentsHelper: ComponentsHelper, private vcr: ViewContainerRef) {
      componentsHelper.setRootViewContainerRef(vcr);
    }*/
    RiskQuizComponent.prototype.ngOnInit = function () {
    };
    RiskQuizComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.childModal.show();
    };
    RiskQuizComponent.prototype.ocular_diseases_selected = function (values) {
        this.model.ocular_disease_history = values.map(function (v) { return v.id; });
    };
    return RiskQuizComponent;
}());
__decorate([
    core_1.ViewChild('childModal')
], RiskQuizComponent.prototype, "childModal", void 0);
RiskQuizComponent = __decorate([
    core_1.Component({
        selector: 'app-risk-quiz',
        templateUrl: './risk-quiz.component.html',
        styleUrls: ['./risk-quiz.component.css']
    })
], RiskQuizComponent);
exports.RiskQuizComponent = RiskQuizComponent;
