import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainOutletComponent } from './main-outlet/main-outlet.component';

const routes: Routes = [
  {
    path: '',
    component: MainOutletComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      }
    ],
  },
  {
    path: 'auth',
    component: MainOutletComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
      }
    ],
  },
  {
    path: 'client',
    component: MainOutletComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./users/client/client.module").then(m => m.ClientModule)
      }
    ],
  },
  {
    path: 'admin',
    component: MainOutletComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./users/admin/admin.module").then(m => m.AdminModule)
      }
    ],
  },
  {
    path: 'comptable',
    component: MainOutletComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./users/comptable/comptable.module").then(m => m.ComptableModule)
      }
    ],
  },
  {
    path: 'senior',
    component: MainOutletComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./users/senior/senior.module").then(m => m.SeniorModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
