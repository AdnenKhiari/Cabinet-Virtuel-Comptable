import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CanvasComponent } from './canvas/canvas.component';
import { MatListModule } from '@angular/material/list';
import { OverviewComponent } from './overview/overview.component';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CanvasComponent,
    OverviewComponent,
    ConfigurationComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class ClientModule { }
