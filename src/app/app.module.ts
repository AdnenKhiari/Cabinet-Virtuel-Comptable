import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ListeFacturesComponent } from './liste-factures/liste-factures.component'

import { ReactiveFormsModule } from '@angular/forms'
import { SuiviEcheancesFiscalesComponent } from './suivi-echeances-fiscales/suivi-echeances-fiscales.component'
import { HistoriqueActionsComponent } from './historique-actions/historique-actions.component'

@NgModule({
  declarations: [
    AppComponent,
    ListeFacturesComponent,
    SuiviEcheancesFiscalesComponent,
    HistoriqueActionsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
