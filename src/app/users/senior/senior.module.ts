import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeniorRoutingModule } from './senior-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { ClientsComponent } from './clients/clients.component';
import { ComptablesComponent } from './comptables/comptables.component';
import { CanvasComponent } from './canvas/canvas.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    ClientsComponent,
    ComptablesComponent,
    CanvasComponent
  ],
  imports: [
    CommonModule,
    SeniorRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class SeniorModule { }
