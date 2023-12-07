import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ListeDeclarationsFiscalesComponent } from './liste-declarations-fiscales/liste-declarations-fiscales.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, ListeDeclarationsFiscalesComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
