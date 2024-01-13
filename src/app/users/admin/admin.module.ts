import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { GestionUserComponent } from './gestion-user/gestion-user.component';
import { HistoriqueActionsComponent } from './historique-actions/historique-actions.component'; 
import { AdminRoutingModule } from './admin-routing.module';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    GestionUserComponent, 
    HistoriqueActionsComponent,
    TableauDeBordComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatListModule,
    ReactiveFormsModule,
    MatTableModule,
    
  ]
})
export class AdminModule { }
