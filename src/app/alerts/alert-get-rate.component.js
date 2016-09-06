"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var alert_service_1 = require('./alert.service');
var alert_create_component_1 = require('./alert-create.component');
var yahoo_finance_service_1 = require('../yahoo-finance.service');
var AlertGetRateComponent = (function () {
    function AlertGetRateComponent(alertService, yahooFinanceService, builder) {
        this.alertService = alertService;
        this.yahooFinanceService = yahooFinanceService;
        this.builder = builder;
        this.pageTitle = 'Create new alert';
        this.currencies = [
            "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD",
        ];
        this.from_currency = new forms_1.FormControl('', forms_1.Validators.required);
        this.to_currency = new forms_1.FormControl('', forms_1.Validators.required);
    }
    AlertGetRateComponent.prototype.goBack = function () {
        window.history.back();
    };
    AlertGetRateComponent.prototype.getRate = function (rates) {
        var _this = this;
        this.yahooFinanceService
            .getRates(rates.from_currency + '' + rates.to_currency)
            .then(function (rate) { return _this.exchangeRate = rate; })
            .catch(this.handleError);
    };
    AlertGetRateComponent.prototype.ngOnInit = function () {
        this.getRateForm = this.builder.group({
            from_currency: this.from_currency,
            to_currency: this.to_currency
        });
    };
    AlertGetRateComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error);
    };
    AlertGetRateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/alerts/alert-get-rate.component.html',
            directives: [forms_1.FORM_DIRECTIVES, alert_create_component_1.AlertCreateComponent],
        }), 
        __metadata('design:paramtypes', [alert_service_1.AlertService, yahoo_finance_service_1.YahooFinanceService, forms_1.FormBuilder])
    ], AlertGetRateComponent);
    return AlertGetRateComponent;
}());
exports.AlertGetRateComponent = AlertGetRateComponent;
//# sourceMappingURL=alert-get-rate.component.js.map