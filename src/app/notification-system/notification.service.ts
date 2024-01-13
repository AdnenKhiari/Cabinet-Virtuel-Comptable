import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { Notification, NotificationType } from "./notification";

@Injectable()
export class NotificationService {  //class managing notifications

  private _subject = new Subject<Notification>();  //initializing object notification
  private _idx = 0;   //index for identifying the notification

  constructor() { }

  getObservable(): Observable<Notification> {   //returns Observable to subscribe to notifications
    return this._subject.asObservable();
  }

  info(title: string, message: string, timeout = 3000) {
    this._subject.next(new Notification(this._idx++, NotificationType.info, title, message, timeout));//displays info notifications
  }

  success(title: string, message: string, timeout = 3000) {
    this._subject.next(new Notification(this._idx++, NotificationType.success, title, message, timeout));//displays a succes notification
  }

  warning(title: string, message: string, timeout = 3000) {
    this._subject.next(new Notification(this._idx++, NotificationType.warning, title, message, timeout));//displays a warning notification
  }

  error(title: string, message: string, timeout = 0) {
    this._subject.next(new Notification(this._idx++, NotificationType.error, title, message, timeout));//displays an error notification
  }

}
