import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SuiviEcheancesFiscalesComponent } from './suivi-echeances-fiscales/suivi-echeances-fiscales.component'
import { HistoriqueActionsComponent } from './historique-actions/historique-actions.component'

@NgModule({
  declarations: [AppComponent, SuiviEcheancesFiscalesComponent, HistoriqueActionsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
