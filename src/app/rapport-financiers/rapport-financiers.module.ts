import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BilanComponent } from './bilan/bilan.component';
import { CompteResultatComponent } from './compte-resultat/compte-resultat.component';
import { DeclarationTvaComponent } from './declaration-tva/declaration-tva.component';

import { RapportFinanciersRoutingModule } from './rapport-financiers-routing.module';



@NgModule({
  declarations: [
    BilanComponent,
    CompteResultatComponent,
    DeclarationTvaComponent
  ],
  imports: [
    CommonModule ,

    RapportFinanciersRoutingModule,
  ]
})
export class RapportFinanciersModule { }
