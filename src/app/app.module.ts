import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { FormsModule }     from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserLoginComponent } from './users/user-login.component';
import { UserRegistrationComponent } from './users/user-registration.component';
import { AlertListComponent } from './alerts/alert-list.component';
// import { AlertDetailComponent } from './alerts/alert-detail.component';
import { AlertCreateComponent } from './alerts/alert-create.component';
import { FlashMessageComponent } from './flash-message.component';

import { routing } from './app.routing';
import { AlertService } from './alerts/alert.service';
import { UserService } from './users/user.service';
import { YahooFinanceService } from './yahoo-finance.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    // AlertDetailComponent,
    AlertListComponent,
    AlertCreateComponent,
    FlashMessageComponent,
  ],
  providers: [
    AlertService,
    UserService,
    YahooFinanceService,
    AuthGuard,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
