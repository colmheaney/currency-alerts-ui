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
var yahoo_finance_service_1 = require('../yahoo-finance.service');
var currencies_1 = require('../currencies');
var AlertCreateComponent = (function () {
    function AlertCreateComponent(alertService, yahooFinanceService, builder) {
        this.alertService = alertService;
        this.yahooFinanceService = yahooFinanceService;
        this.builder = builder;
        this.pageTitle = 'Create new alert';
        this.currencies = currencies_1.CURRENCIES;
        this.defaultCurrencyFrom = "GBP";
        this.defaultCurrencyTo = "EUR";
        this.message = '';
        this.submitAttempt = false;
        this.from_currency = new forms_1.FormControl('', forms_1.Validators.required);
        this.to_currency = new forms_1.FormControl('', forms_1.Validators.required);
        this.upper_rate = new forms_1.FormControl('', forms_1.Validators.required);
        this.lower_rate = new forms_1.FormControl('', forms_1.Validators.required);
    }
    AlertCreateComponent.prototype.createAlert = function (alert) {
        var _this = this;
        this.submitAttempt = true;
        if (this.createAlertForm.valid) {
            this.alertService.create(alert)
                .subscribe(function (data) { return _this.goBack(); }, function (error) { return _this.handleError(error); });
        }
    };
    AlertCreateComponent.prototype.getRate = function (from_currency, to_currency, event) {
        var _this = this;
        event.preventDefault(); //otherwise the form will be submitted
        this.yahooFinanceService.getRates(from_currency + '' + to_currency)
            .subscribe(function (rate) { return _this.exchangeRate = rate; }, function (error) { return _this.handleError(error); });
    };
    AlertCreateComponent.prototype.ngOnInit = function () {
        this.createAlertForm = this.builder.group({
            from_currency: this.from_currency,
            to_currency: this.to_currency,
            upper_rate: this.upper_rate,
            lower_rate: this.lower_rate,
        });
    };
    AlertCreateComponent.prototype.goBack = function () {
        window.history.back();
    };
    AlertCreateComponent.prototype.handleError = function (error) {
        this.message = 'An error occurred. Please try again';
    };
    AlertCreateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/alerts/alert-create.component.html',
            directives: [forms_1.FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [alert_service_1.AlertService, yahoo_finance_service_1.YahooFinanceService, forms_1.FormBuilder])
    ], AlertCreateComponent);
    return AlertCreateComponent;
}());
exports.AlertCreateComponent = AlertCreateComponent;
//# sourceMappingURL=alert-create.component.js.map