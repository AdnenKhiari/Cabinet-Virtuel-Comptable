import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RapportFinanciersComponent } from './rapport-financiers/rapport-financiers.component';
import { BilanComponent } from './rapport-financiers/bilan/bilan.component';
import { CompteResultatComponent } from './rapport-financiers/compte-resultat/compte-resultat.component';
import { DeclarationTvaComponent } from './rapport-financiers/declaration-tva/declaration-tva.component';

@NgModule({
  declarations: [
    AppComponent,
    RapportFinanciersComponent,
    BilanComponent,
    CompteResultatComponent,
    DeclarationTvaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
