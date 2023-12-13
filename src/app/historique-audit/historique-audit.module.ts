import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditComponent } from './audit/audit.component';
import { HistoriqueComponent } from './historique/historique.component';
import { AuditService } from './audit.service';


@NgModule({
  declarations: [
    AuditComponent,
    HistoriqueComponent
  ],
  providers: [AuditService],
  imports: [
    CommonModule
  ]
})
export class HistoriqueAuditModule { }
