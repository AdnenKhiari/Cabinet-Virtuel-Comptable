import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanvasComponent } from './canvas/canvas.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent},
      { path: 'canvas', component: CanvasComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
