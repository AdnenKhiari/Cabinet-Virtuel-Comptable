import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RapportFinanciersComponent } from './rapport-financiers.component'
import { BilanComponent } from './bilan/bilan.component'
import { CompteResultatComponent } from './compte-resultat/compte-resultat.component'
import { DeclarationTvaComponent } from './declaration-tva/declaration-tva.component'
import { CommonModule } from '@angular/common'

const routes: Routes = [
  { path: '', component: RapportFinanciersComponent },
  { path: 'bilan', component: BilanComponent },
  { path: 'compte_resultat', component: CompteResultatComponent },
  { path: 'declaration_tva', component: DeclarationTvaComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RapportFinanciersRoutingModule {}
