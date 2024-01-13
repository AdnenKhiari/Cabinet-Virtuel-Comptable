import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { AuthentificationModule } from './authentification/authentification.module'
import { LoginComponent } from './authentification/login/login.component'
import { SignUpComponent } from './authentification/sign-up/sign-up.component'
import { ListeClientsComponent } from './liste-clients/liste-clients.component'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { GestionComptesComponent } from './gestion-comptes/gestion-comptes.component'
import { MatTabsModule } from '@angular/material/tabs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ComptesBancairesComponent } from './gestion-comptes/comptes-bancaires/comptes-bancaires.component'
import { RelevesBancairesComponent } from './gestion-comptes/releves-bancaires/releves-bancaires.component'

@NgModule({
  declarations: [
    AppComponent,
    ListeClientsComponent,
    GestionComptesComponent,
    ComptesBancairesComponent,
    RelevesBancairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthentificationModule,
    FormsModule,
    NgbModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
