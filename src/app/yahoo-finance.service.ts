import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class YahooFinanceService {

    constructor(private http: Http) { }

    getRates(symbols: string) {
        const url = this.generateUri(symbols);
        return this.http.get(url)
            .map(res => res.json().query.results.rate.Rate)
    }

    private generateUri(symbols: string): string {
        return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22${symbols}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}