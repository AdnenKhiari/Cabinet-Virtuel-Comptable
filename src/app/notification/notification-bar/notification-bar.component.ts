import { Component, Input, OnInit } from '@angular/core'
import { NotificationBarModel } from './notification-bar.component.model'

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {
  @Input() notification!: NotificationBarModel

  ngOnInit() {
    this.notification.isHidden = true
  }

  toggleVisibility() {
    this.notification.isHidden = !this.notification.isHidden
  }

  constructor() {}
}
