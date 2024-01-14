import { NgModule, isDevMode } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'

import { RapportFinanciersComponent } from './rapport-financiers/rapport-financiers.component'
import { RapportFinanciersRoutingModule } from './rapport-financiers/rapport-financiers-routing.module'
import { CompteResultatComponent } from './rapport-financiers/compte-resultat/compte-resultat.component'
import { DeclarationTvaComponent } from './rapport-financiers/declaration-tva/declaration-tva.component'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { GestionComptesComponent } from './gestion-comptes/gestion-comptes.component'
import { MatTabsModule } from '@angular/material/tabs'
import { ComptesBancairesComponent } from './gestion-comptes/comptes-bancaires/comptes-bancaires.component'
import { RelevesBancairesComponent } from './gestion-comptes/releves-bancaires/releves-bancaires.component'
import { NotificationModule } from './notification/notification.module'
import { AuthentificationModule } from './authentification/authentification.module'
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component'
import { ImpressionsDocumentsListComponent } from './impressions-documents-list/impressions-documents-list.component'

import { NavbarModule } from './navbar/navbar.module'
import { SaisieComptableModule } from './saisie-comptable/saisie-comptable.module'
import { ReactiveFormsModule } from '@angular/forms'
import { SuiviEcheancesFiscalesComponent } from './suivi-echeances-fiscales/suivi-echeances-fiscales.component'
import { HistoriqueActionsComponent } from './historique-actions/historique-actions.component'
import { GestionUserComponent } from './gestion-user/gestion-user.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ConfigurationComponent } from './configuration/configuration.component'
import { XmlToJsonComponent } from './xml-to-json/xml-to-json.component'
import { ListeFacturesComponent } from './liste-factures/liste-factures.component'
import { ListeDeclarationsFiscalesComponent } from './liste-declarations-fiscales/liste-declarations-fiscales.component'
import { ListeClientsComponent } from './liste-clients/liste-clients.component'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

@NgModule({
  declarations: [
    AppComponent,
    ListeClientsComponent,
    GestionComptesComponent,
    ComptesBancairesComponent,
    RelevesBancairesComponent,
    ListeDeclarationsFiscalesComponent,
    ListeFacturesComponent,
    ConfigurationComponent,
    SuiviEcheancesFiscalesComponent,
    HistoriqueActionsComponent,
    RapportFinanciersComponent,
    CompteResultatComponent,
    DeclarationTvaComponent,
    GestionUserComponent,
    ListeClientsComponent,
    XmlToJsonComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
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
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    NotificationModule,
    NavbarModule,
    SaisieComptableModule,
    TableauDeBordComponent,
    ImpressionsDocumentsListComponent,
    FormsModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ]
})
export class AppModule {}
