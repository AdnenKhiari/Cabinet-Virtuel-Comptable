import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ForgotPasswordComponent } from './authentification/forgot-password/forgot-password.component'
import { LoginComponent } from './authentification/login/login.component'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgotPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  // {path:"**",component:PageNotFoundComponent}
  {
    path: 'historique',
    loadChildren: () =>
      import('./historique-audit/historique-audit.module').then(m => m.HistoriqueAuditModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
