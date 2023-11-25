import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ConnexionComponent } from './connexion/connexion.component'

@NgModule({
  declarations: [ConnexionComponent],
  imports: [CommonModule],
  exports: [ConnexionComponent]
})
export class AuthentificationModule {}
