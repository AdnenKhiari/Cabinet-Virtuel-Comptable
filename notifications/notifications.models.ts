// notifications.module.ts
import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification.component';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [NotificationComponent],
  providers: [NotificationService],
})
export class NotificationsModule { }
