import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'
import { LoginComponent } from './authentification/login/login.component'
import { ForgotPasswordComponent } from './authentification/forgot-password/forgot-password.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgotpwd', component: ForgotPasswordComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
