import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Alert } from './alert';

@Injectable()
export class AlertService {

    private alertsUrl = 'http://localhost:1111/api/v1/alerts';
    private authToken = localStorage.getItem('auth_token');
    private headers = new Headers({
            'Content-Type'    : 'application/json', 
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization'   : `Bearer ${this.authToken}`});

    constructor(private http: Http) { }
    
    getAlerts() {   
        return this.http.get(this.alertsUrl, { body:"",  headers: this.headers })
            .map(res => res.json())
    }

    create(alert: Alert) {
        return this.http.post(this.alertsUrl, alert, {headers: this.headers})
            .map(res => res.json())
    }

    // getAlert(id: number) {  
    //     return this.getAlerts()
    //         .then(alerts => alerts.find(alert => alert.id === id));
    // }
    //
    // update(alert: Alert): Promise<Alert> {
    //     const url = `${this.alertsUrl}/${alert.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(alert), {headers: this.headers})
    //         .toPromise()
    //         .then(() => alert)
    //         .catch(this.handleError);
    // }

}