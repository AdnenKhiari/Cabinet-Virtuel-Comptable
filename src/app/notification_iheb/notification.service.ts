import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { Notification, NotificationType } from './notification'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _subject = new Subject<Notification>()
  private _idx = 0

  constructor() {}

  getObservable(): Observable<Notification> {
    return this._subject.asObservable()
  }

  notify(type: NotificationType, title: string, message: string, timeout = 3000) {
    this._subject.next(new Notification(this._idx++, type, title, message, timeout))
  }

  info(title: string, message: string, timeout = 3000) {
    this.notify(NotificationType.info, title, message, timeout)
  }

  success(title: string, message: string, timeout = 3000) {
    this.notify(NotificationType.success, title, message, timeout)
  }

  warning(title: string, message: string, timeout = 3000) {
    this.notify(NotificationType.warning, title, message, timeout)
  }

  error(title: string, message: string, timeout = 0) {
    this.notify(NotificationType.error, title, message, timeout)
  }
}
