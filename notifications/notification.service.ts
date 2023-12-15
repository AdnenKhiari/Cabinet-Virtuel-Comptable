// notification.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
// Type Success is sent when you successfully log in and it's just a popup
// type error is sent when you wan't authenticate
// Type info is sent when there's an update
@Injectable()
export class NotificationService {
  private notificationSubject = new Subject<NotificationMessage>();

  sendNotification(message: string, type: NotificationType) {
    const notification: NotificationMessage = { message, type };
    this.notificationSubject.next(notification);
  }

  getNotifications(): Observable<NotificationMessage> {
    return this.notificationSubject.asObservable();
  }
}

export interface NotificationMessage {
  message: string;
  type: NotificationType;
}

export enum NotificationType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
}
