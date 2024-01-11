import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './authentification/login/login.component'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component'
import { CharteChargesComponent } from './charte-charges/charte-charges.component'
import { CharteEcartRevenuesChargesComponent } from './charte-ecart-revenues-charges/charte-ecart-revenues-charges.component'
import { RevenuesClientsComponent } from './revenues-clients/revenues-clients.component'
import { ImpressionsDocumentsListComponent } from './impressions-documents-list/impressions-documents-list.component'
import { ForgotPasswordComponent } from './authentification/forgot-password/forgot-password.component'
import { ListeDeclarationsFiscalesComponent } from './liste-declarations-fiscales/liste-declarations-fiscales.component'
import { ListeFacturesComponent } from './liste-factures/liste-factures.component'
import { SuiviEcheancesFiscalesComponent } from './suivi-echeances-fiscales/suivi-echeances-fiscales.component'
import { HistoriqueActionsComponent } from './historique-actions/historique-actions.component'
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable/saisie-comptable.component'
import { GestionUserComponent } from './gestion-user/gestion-user.component'
import { ConfigurationComponent } from './configuration/configuration.component'

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignUpComponent },
  { path: 'forget-password', component: ForgotPasswordComponent },
  { path: 'tableau-de-bord', component: TableauDeBordComponent },
  { path: 'charte-charges', component: CharteChargesComponent },
  { path: 'RevenuesClients', component: RevenuesClientsComponent },
  { path: 'charte-ecart-revenues-charges', component: CharteEcartRevenuesChargesComponent },
  { path: 'impressions-documents-list', component: ImpressionsDocumentsListComponent },
  { path: 'liste-declarations-fiscales', component: ListeDeclarationsFiscalesComponent },
  { path: 'liste-factures', component: ListeFacturesComponent },
  { path: 'suivi-echeances-fiscales', component: SuiviEcheancesFiscalesComponent },
  { path: 'historique-actions', component: HistoriqueActionsComponent },
  { path: 'Saisie-Comptable', component: SaisieComptableComponent },
  { path: 'Gestion-User', component: GestionUserComponent },
  { path: 'Configuration', component: ConfigurationComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
