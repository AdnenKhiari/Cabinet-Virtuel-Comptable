import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ListeFacturesComponent } from './liste-factures/liste-factures.component'

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, ListeFacturesComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
