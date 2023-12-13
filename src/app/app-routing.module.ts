import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationRapportsComponent } from './generation-rapports/generation-rapports.component';

const routes: Routes = [{path : "rapports", component : GenerationRapportsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GenerationRapportsComponent];
