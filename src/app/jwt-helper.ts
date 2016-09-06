import { Injectable } from '@angular/core';
declare var escape: any;

@Injectable()
export class JwtHelper {

  public urlBase64Decode(str: string): string {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0: { break; }
      case 2: { output += '=='; break; }
      case 3: { output += '='; break; }
      default: {
        throw 'Illegal base64url string!';
      }
    }

    return decodeURIComponent(escape(typeof window === 'undefined' ? atob(output) : window.atob(output))); //polyfill https://github.com/davidchambers/Base64.js
  }

  public decodeToken(token: string): any {
    let parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error('JWT must have 3 parts');
    }

    let decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error('Cannot decode the token');
    }

    return JSON.parse(decoded);
  }

  public getTokenExpirationDate(token: string): Date {
    let decoded: any;
    decoded = this.decodeToken(token);

    if (typeof decoded.exp === 'undefined') {
      return new Date(0);
    }

    let date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);

    return date;
  }

  public isTokenExpired(token: string, offsetSeconds?: number): boolean {
    let date = this.getTokenExpirationDate(token);
    offsetSeconds = offsetSeconds || 0;

    // Token expired?
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
  }
}