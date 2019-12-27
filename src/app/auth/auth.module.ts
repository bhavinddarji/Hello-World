import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'forgot',
      component: ForgotpasswordComponent
  },
  {
      path: 'regirstration',
      component: RegistrationComponent
  }
];


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegistrationComponent
  ],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class AuthModule { }
