import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuditComponent } from './audit/audit.component'
import { HistoriqueComponent } from './historique/historique.component'

const routes: Routes = [
  { path: '', component: HistoriqueComponent },
  { path: 'audit', component: AuditComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriqueAuditRoutingModule {}
