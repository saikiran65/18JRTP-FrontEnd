import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegServiceService } from './registration/reg-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UnlockComponent } from './unlock/unlock.component';
import { LoginComponent } from './login/login.component';
import { UnlockService } from './unlock/unlock.service';
import { LoginService } from './login/login.service';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ForgotpwdService } from './forgotpwd/forgotpwd.service';
import { DynqueryComponent } from './dynquery/dynquery.component';
import { DynqueryService } from './dynquery/dynquery.service';
import { DynamicqueryComponent } from './dynamicquery/dynamicquery.component';
import { DynamicqueryService } from './dynamicquery/dynamicquery.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UnlockComponent,
    LoginComponent,
    ForgotpwdComponent,
    DynqueryComponent,
    DynamicqueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RegServiceService,UnlockService,LoginService,ForgotpwdService,DynqueryService,DynamicqueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
