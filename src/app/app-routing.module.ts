import { MainOutletComponent } from './main-outlet/main-outlet.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ForgotPasswordComponent } from './authentification/forgot-password/forgot-password.component'
import { LoginComponent } from './authentification/login/login.component'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'
const routes: Routes = [
  {
    path: '',
    component: MainOutletComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forget-password', component: ForgotPasswordComponent },
      { path: 'sign-up', component: SignUpComponent },
      // {path:"**",component:PageNotFoundComponent}
      {
        path: 'historique',
        loadChildren: () =>
          import('./historique-audit/historique-audit.module').then(m => m.HistoriqueAuditModule)
      },

      {
        path: 'auth',
        component: MainOutletComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
          }
        ]
      },
      {
        path: 'client',
        component: MainOutletComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./users/client/client.module').then(m => m.ClientModule)
          }
        ]
      },
      {
        path: 'admin',
        component: MainOutletComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./users/admin/admin.module').then(m => m.AdminModule)
          }
        ]
      },
      {
        path: 'comptable',
        component: MainOutletComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./users/comptable/comptable.module').then(m => m.ComptableModule)
          }
        ]
      },
      {
        path: 'senior',
        component: MainOutletComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./users/senior/senior.module').then(m => m.SeniorModule)
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
