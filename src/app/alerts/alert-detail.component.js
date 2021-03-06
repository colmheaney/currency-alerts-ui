// import { Component, OnInit } from '@angular/core';
// import { AlertService } from './alert.service';
// import { ActivatedRoute, Params } from '@angular/router';
// import { Alert } from './alert';
// @Component({
//     templateUrl: 'app/alerts/alert-detail.component.html'
// })
// export class AlertDetailComponent implements OnInit {
//     pageTitle: string = 'Alert';
//     alert: Alert;
//     constructor(
//         private alertService: AlertService,
//         private route: ActivatedRoute) {}
//     ngOnInit(): void {
//         this.route.params.forEach((params: Params) => {
//             let id = +params['id'];
//             this.alertService.getAlert(id)
//                 .then(alert => this.alert = alert);
//         });
//     }
//     save(): void {
//         this.alertService.update(this.alert)
//         .then(this.goBack);
//     }
//     goBack(): void {
//         window.history.back();
//     }
// }    
//# sourceMappingURL=alert-detail.component.js.map