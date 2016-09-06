import { Component, OnInit } from '@angular/core';
import { Alert } from './alert';
import { ROUTER_DIRECTIVES } from '@angular/router'
import { AlertService } from './alert.service';

@Component({
    selector: 'as-alerts',
    templateUrl: './alert-list.component.html',
    directives: [ROUTER_DIRECTIVES],
})

export class AlertListComponent implements OnInit {

    pageTitle: string =  "List of Alerts";
    selectedAlert: Alert;
    alerts: Alert[];

    constructor(private alertService: AlertService) { }

    getAlerts() {
        this.alertService.getAlerts()
            .subscribe(
                data => this.alerts = data.alerts,
                error => console.log("an error occurred")
            );
    }

    ngOnInit(): void {
        this.getAlerts();
    }

    private handleError(): void {
        console.log("something went wrong");
    }
}