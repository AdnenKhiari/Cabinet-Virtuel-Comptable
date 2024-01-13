import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { LoginComponent } from './login/login.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent, SignUpComponent, ForgotPasswordComponent],
  imports: [CommonModule,RouterModule,ReactiveFormsModule,HttpClientModule],
  exports: [LoginComponent, SignUpComponent, ForgotPasswordComponent]
})
export class AuthentificationModule {}
