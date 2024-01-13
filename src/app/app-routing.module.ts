import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ForgotPasswordComponent } from './authentification/forgot-password/forgot-password.component'
import { LoginComponent } from './authentification/login/login.component'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'
import { GenRapportsComponent } from './gen-rapports/gen-rapports.component.spec'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgotPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },

  { path: 'gen-rapports', component: GenRapportsComponent }

  // {path:"**",component:PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
