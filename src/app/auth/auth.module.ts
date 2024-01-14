import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthRoutingModule } from './auth-routing.module'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotPasswordComponent],
  imports: [CommonModule, AuthRoutingModule]
})
export class AuthModule {}
