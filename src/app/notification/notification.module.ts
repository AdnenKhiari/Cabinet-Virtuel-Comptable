import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotificationBarComponent } from './notification-bar/notification-bar.component'

@NgModule({
  declarations: [NotificationBarComponent],
  imports: [CommonModule],
  exports: [NotificationBarComponent]
})
export class NotificationModule {}
