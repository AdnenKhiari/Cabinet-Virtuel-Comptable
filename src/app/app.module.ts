import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { AuthentificationModule } from './authentification/authentification.module'
import { LoginComponent } from './authentification/login/login.component'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'
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

@NgModule({
  declarations: [
    AppComponent,
    ListeDeclarationsFiscalesComponent,
    ListeFacturesComponent,
    SuiviEcheancesFiscalesComponent,
    HistoriqueActionsComponent,
    GestionUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthentificationModule,
    NotificationModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    NotificationModule,
    NavbarModule,
    SaisieComptableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
