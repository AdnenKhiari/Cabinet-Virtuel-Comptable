import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SuiviEcheancesFiscalesComponent } from './suivi-echeances-fiscales/suivi-echeances-fiscales.component'

@NgModule({
  declarations: [AppComponent, SuiviEcheancesFiscalesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
