import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts'
import { AuthentificationModule } from './authentification/authentification.module'
import { LoginComponent } from './authentification/login/login.component'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component'
import { CharteChargesComponent } from './charte-charges/charte-charges.component'
import { CharteEcartRevenuesChargesComponent } from './charte-ecart-revenues-charges/charte-ecart-revenues-charges.component'
import { RevenuesClientsComponent } from './revenues-clients/revenues-clients.component'
import { MatTableModule } from '@angular/material/table'
import { ImpressionsDocumentsListComponent } from './impressions-documents-list/impressions-documents-list.component'

import { NotificationModule } from './notification/notification.module'
import { NavbarModule } from './navbar/navbar.module'
import { SaisieComptableModule } from './saisie-comptable/saisie-comptable.module'
import { ListeDeclarationsFiscalesComponent } from './liste-declarations-fiscales/liste-declarations-fiscales.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ListeFacturesComponent } from './liste-factures/liste-factures.component'

import { SuiviEcheancesFiscalesComponent } from './suivi-echeances-fiscales/suivi-echeances-fiscales.component'
import { HistoriqueActionsComponent } from './historique-actions/historique-actions.component'
import { GestionUserComponent } from './gestion-user/gestion-user.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTabsModule } from '@angular/material/tabs'
import { ConfigurationComponent } from './configuration/configuration.component'
import { ListeClientsComponent } from './liste-clients/liste-clients.component'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { XmlToJsonComponent } from './xml-to-json/xml-to-json.component'


@NgModule({
  declarations: [
    AppComponent,
    ListeDeclarationsFiscalesComponent,
    ListeFacturesComponent,
    ConfigurationComponent,
    SuiviEcheancesFiscalesComponent,
    HistoriqueActionsComponent,
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
    HttpClientModule
  ]
})
export class AppModule {}
