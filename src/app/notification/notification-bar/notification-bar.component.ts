import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {
  @Input() message!: String
  @Input() icon!: String
  @Input() type!: String
  //input propreties to receive data from parent component(notification system component)

  isHidden = true //visibility of the component is hidden

  toggleVisibility() {
    this.isHidden = !this.isHidden  //toggle the visibility of the component
  }

  constructor() {}

  ngOnInit() {
    // USE IF ICON == NULL
    // this.icon
    //   ? this.icon
    //   : (this.icon =
    //       'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/2048px-Flat_cross_icon.svg.png')
  }
}
