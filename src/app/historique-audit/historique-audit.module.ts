import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuditComponent } from './audit/audit.component'
import { HistoriqueComponent } from './historique/historique.component'
import { AuditService } from './audit.service'
import { HistoriqueAuditRoutingModule } from './historique-audit-routing.module'

@NgModule({
  declarations: [AuditComponent, HistoriqueComponent],
  providers: [AuditService],
  imports: [HistoriqueAuditRoutingModule, CommonModule]
})
export class HistoriqueAuditModule {}
