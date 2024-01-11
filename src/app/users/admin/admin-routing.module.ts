import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { CanvasComponent } from './canvas/canvas.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'users', component: UsersComponent },
      { path: 'canvas', component: CanvasComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
