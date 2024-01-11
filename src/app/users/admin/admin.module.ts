import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './users/users.component';
import { OverviewComponent } from './overview/overview.component';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    OverviewComponent,
    CanvasComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class AdminModule { }
