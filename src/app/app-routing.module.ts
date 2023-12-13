import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [{path: "historique", loadChildren: () => import('./historique-audit/historique-audit.module').then(m => m.HistoriqueAuditModule) }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
