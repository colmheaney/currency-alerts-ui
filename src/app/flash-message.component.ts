import { Component, Input } from '@angular/core';
@Component({
    selector: 'flash-message',
    template: `
        <div class="alert alert-danger" role="alert">{{message}}</div>
    `
})
export class FlashMessageComponent {
    @Input() message: string;
}