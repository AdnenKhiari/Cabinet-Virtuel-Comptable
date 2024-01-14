import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { OverviewComponent } from './overview/overview.component'
import { ListeDeclarationsFiscalesComponent } from './liste-declarations-fiscales/liste-declarations-fiscales.component'
import { ListeFacturesComponent } from './liste-factures/liste-factures.component'
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable.component'
import { SuiviEcheancesFiscalesComponent } from './suivi-echeances-fiscales/suivi-echeances-fiscales.component'
import { ImpressionsDocumentsListComponent } from './impressions-documents-list/impressions-documents-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'declarations', component: ListeDeclarationsFiscalesComponent },
      { path: 'factures', component: ListeFacturesComponent },
      { path: 'saisie', component: SaisieComptableComponent },
      { path: 'echeance', component: SuiviEcheancesFiscalesComponent },
      { path: 'documents', component: ImpressionsDocumentsListComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComptableRoutingModule {}
