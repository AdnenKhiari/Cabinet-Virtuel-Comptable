import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ForgotPasswordComponent } from './authentification/forgot-password/forgot-password.component'
import { LoginComponent } from './authentification/login/login.component'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'

const routes: Routes = [     //specify the routes for the project components
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgotPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  // {path:"**",component:PageNotFoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
