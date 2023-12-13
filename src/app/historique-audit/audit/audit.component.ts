import { Component } from '@angular/core'
import { AuditService } from '../audit.service'
import { Audit } from 'src/app/models/historique-audit'

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent {
  constructor(private auditService: AuditService) {}
  audits:Audit[] = []
  ngOnInit() {
    this.auditService.getAudit().subscribe((data) => {
      this.audits = data
    })
  }

  deleteAudit(id: number) {
    this.auditService.deleteAudit(id).subscribe(() => {
      this.audits = this.audits.filter((audit) => audit.id !== id)
    })
  }

  addAudit(audit: Audit) {
    this.auditService.addAudit(audit).subscribe((data) => {
      this.audits.push(data)
    })
  }

  updateAudit(audit: Audit) {
    this.auditService.updateAudit(audit).subscribe((data) => {
      this.audits = this.audits.map((audit) => {
        if (audit.id === data.id) {
          return data
        }
        return audit
      })
    })
  }

  getAuditById(id: number) {
    this.auditService.getAuditById(id).subscribe((data) => {
      this.audits = this.audits.filter((audit) => audit.id === id)
    })
  }
}
