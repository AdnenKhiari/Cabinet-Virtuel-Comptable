import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { RapportFinanciersComponent } from './rapport-financiers/rapport-financiers.component'
import { RapportFinanciersRoutingModule } from './rapport-financiers/rapport-financiers-routing.module'
import { BilanComponent } from './rapport-financiers/bilan/bilan.component'
import { CompteResultatComponent } from './rapport-financiers/compte-resultat/compte-resultat.component'
import { DeclarationTvaComponent } from './rapport-financiers/declaration-tva/declaration-tva.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthentificationModule } from './authentification/authentification.module'
import { LoginComponent } from './authentification/login/login.component'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'
import { ListeClientsComponent } from './liste-clients/liste-clients.component'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { GestionComptesComponent } from './gestion-comptes/gestion-comptes.component'
import { MatTabsModule } from '@angular/material/tabs'
import { ComptesBancairesComponent } from './gestion-comptes/comptes-bancaires/comptes-bancaires.component'
import { RelevesBancairesComponent } from './gestion-comptes/releves-bancaires/releves-bancaires.component'
import { NotificationModule } from './notification/notification.module'
import { ListeDeclarationsFiscalesComponent } from './liste-declarations-fiscales/liste-declarations-fiscales.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ListeFacturesComponent } from './liste-factures/liste-factures.component'
import { SuiviEcheancesFiscalesComponent } from './suivi-echeances-fiscales/suivi-echeances-fiscales.component'
import { HistoriqueActionsComponent } from './historique-actions/historique-actions.component'
import { NavbarModule } from './navbar/navbar.module'
import { SaisieComptableModule } from './saisie-comptable/saisie-comptable.module'

@NgModule({
  declarations: [
    AppComponent,
    ListeClientsComponent,
    GestionComptesComponent,
    ComptesBancairesComponent,
    RelevesBancairesComponent,
    ListeDeclarationsFiscalesComponent,
    ListeFacturesComponent,
    SuiviEcheancesFiscalesComponent,
    HistoriqueActionsComponent,
    RapportFinanciersComponent,
    BilanComponent,
    CompteResultatComponent,
    DeclarationTvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthentificationModule,
    NotificationModule,
    ReactiveFormsModule,
    NotificationModule,
    NavbarModule,
    SaisieComptableModule,
    RapportFinanciersRoutingModule,
    FormsModule,
    NgbModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
