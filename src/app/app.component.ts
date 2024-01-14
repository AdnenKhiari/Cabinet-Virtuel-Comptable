import { Component, OnInit } from '@angular/core'
import { NotificationBarModel } from './notification/notification-bar/notification-bar.component.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Comptable'

  notifications!: NotificationBarModel[]

  ngOnInit() {
    this.notifications = [
      {
        message: 'ERROR MSG',
        type: 'danger',
        icon: 'https://static.vecteezy.com/system/resources/thumbnails/012/042/294/small/warning-sign-icon-transparent-background-free-png.png'
      },
      {
        message: 'SUCCESS MSG',
        type: 'success',
        icon: 'https://cdn1.iconfinder.com/data/icons/basic-ui-elements-black-round-line/304782/21-512.png'
      },
      { message: 'INFOMSG', type: 'info' }
    ]
  }
}
