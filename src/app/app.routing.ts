import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './users/user-login.component';
import { UserRegistrationComponent } from './users/user-registration.component';
import { AlertListComponent } from './alerts/alert-list.component';
// import { AlertDetailComponent } from './alerts/alert-detail.component';
import { AlertCreateComponent } from './alerts/alert-create.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: UserLoginComponent
    },
    {
        path: 'alerts',
        component: AlertListComponent,
        canActivate: [AuthGuard]
  },
//   {
//       path: 'alerts/:id',
//       component: AlertDetailComponent,
//       canActivate: [AuthGuard]
//   },
  {
      path: 'new',
      component: AlertCreateComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'register',
      component: UserRegistrationComponent,
  },
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });