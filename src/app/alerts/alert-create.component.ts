import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertService } from './alert.service';
import { YahooFinanceService } from '../yahoo-finance.service';
import { Alert } from './alert';
import { CURRENCIES } from '../currencies';

@Component({
    templateUrl: './alert-create.component.html',
    directives: [FORM_DIRECTIVES],
})
export class AlertCreateComponent implements OnInit {

    pageTitle: string = 'Create new alert';
    exchangeRate: string;
    currencies: string[] = CURRENCIES;
    defaultCurrencyFrom: string = "GBP";
    defaultCurrencyTo: string = "EUR";
    message: string = '';

    createAlertForm: FormGroup;
    upper_rate: FormControl;
    lower_rate: FormControl;
    from_currency: FormControl;
    to_currency: FormControl;
    submitAttempt: boolean = false;

    constructor(
        private alertService: AlertService,
        private yahooFinanceService: YahooFinanceService,
        private builder: FormBuilder) {

        this.from_currency = new FormControl('', Validators.required);
        this.to_currency = new FormControl('', Validators.required);
        this.upper_rate = new FormControl('', Validators.required);
        this.lower_rate = new FormControl('', Validators.required);
    }

    createAlert(alert: any): void {
        this.submitAttempt = true;
        if (this.createAlertForm.valid) {
            this.alertService.create(alert)
                .subscribe(
                    data => this.goBack(),
                    error => this.handleError(error)
                );
        }
    }

    getRate(from_currency: string, to_currency: string, event: any): void {
        event.preventDefault(); //otherwise the form will be submitted
        this.yahooFinanceService.getRates(from_currency + '' + to_currency)
            .subscribe(
                rate => this.exchangeRate = rate,
                error => this.handleError(error)
        );
    }

    ngOnInit(): void {
        this.createAlertForm = this.builder.group({
            from_currency: this.from_currency,
            to_currency: this.to_currency,
            upper_rate: this.upper_rate,
            lower_rate: this.lower_rate,
        });
    }

    private goBack(): void {
        window.history.back();
    }

    private handleError(error: any) {
       this.message = 'An error occurred. Please try again';
    }

}   