import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RapportFinanciersComponent } from './rapport-financiers.component';
import { BilanComponent } from './bilan/bilan.component';
import { CompteResultatComponent } from './compte-resultat/compte-resultat.component';
import { DeclarationTvaComponent } from './declaration-tva/declaration-tva.component';

const routes: Routes = [
    { path: './bilan', component: BilanComponent },
    { path: './compte-resultat', component: CompteResultatComponent },
    { path: './declaration-tva', component: DeclarationTvaComponent },
    { path: '', component: RapportFinanciersComponent }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RapportFinanciersRoutingModule {}
