import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicqueryComponent } from './dynamicquery/dynamicquery.component';
import { DynqueryComponent } from './dynquery/dynquery.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UnlockComponent } from './unlock/unlock.component';

const routes: Routes = [
  {
    path : "registration",
    component : RegistrationComponent
  },
  {
    path : "unlockAcc",
    component : UnlockComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "forgot-pwd",
    component : ForgotpwdComponent
  },
  {
    path : "dynquery",
    component : DynqueryComponent
  },
  {
    path : "dynamicquery",
    component : DynamicqueryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
