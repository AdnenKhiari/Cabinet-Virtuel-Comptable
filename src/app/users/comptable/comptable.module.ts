import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ComptableRoutingModule } from './comptable-routing.module'
import { DashboardComponent } from './dashboard/dashboard.component'
import { OverviewComponent } from './overview/overview.component'

import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table'
import { ListeDeclarationsFiscalesComponent } from './liste-declarations-fiscales/liste-declarations-fiscales.component'
import { ListeFacturesComponent } from './liste-factures/liste-factures.component'
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable.component'
import { SuiviEcheancesFiscalesComponent } from './suivi-echeances-fiscales/suivi-echeances-fiscales.component'
import { ImpressionsDocumentsListComponent } from './impressions-documents-list/impressions-documents-list.component'
import { CharteEcartRevenuesChargesComponent } from 'src/app/shared/overview-charts/charte-ecart-revenues-charges/charte-ecart-revenues-charges.component'
import { CharteChargesComponent } from 'src/app/shared/overview-charts/charte-charges/charte-charges.component'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    ListeDeclarationsFiscalesComponent,
    ListeFacturesComponent,
    SaisieComptableComponent,
    SuiviEcheancesFiscalesComponent,
    ImpressionsDocumentsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComptableRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class ComptableModule {}
