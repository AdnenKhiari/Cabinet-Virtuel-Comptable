import { Component, Input, OnInit } from '@angular/core'
import { NotificationBarModel } from './notification-bar.component.model'

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {
  @Input() message!: String
  @Input() icon!: String
  @Input() type!: String  //input propreties to receive data from parent component(notification system component)

  isHidden = true //visibility of the component is hidden

  toggleVisibility() {
    this.isHidden = !this.isHidden  //toggle the visibility of the component

  }

  constructor() {}
}
