import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable.component'

@NgModule({
  declarations: [SaisieComptableComponent],
  imports: [CommonModule],
  exports: [SaisieComptableComponent]
})
export class SaisieComptableModule {}
