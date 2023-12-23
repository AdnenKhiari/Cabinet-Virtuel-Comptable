import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { StoreModule } from '@ngrx/store'
import { authReducer } from '../store/auth/auth.reducers'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from '../store/auth/auth.effects'

@NgModule({
  declarations: [LoginComponent, SignUpComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('authState', authReducer),
    EffectsModule.forFeature([AuthEffects]),
    RouterModule,
    FormsModule
  ],
  exports: [LoginComponent, SignUpComponent, ForgotPasswordComponent]
})
export class AuthentificationModule {}
