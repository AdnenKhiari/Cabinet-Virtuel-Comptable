import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationRapportsComponent } from './generation-rapports/generation-rapports.component';
import { GenerationRapportComponent } from './generation-rapport/generation-rapport.component';

const routes: Routes = [{path : "rapportsPDF", component : GenerationRapportsComponent},{path : "rapportjson", component : GenerationRapportComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GenerationRapportsComponent];
