import { Component, OnInit } from '@angular/core'
import { NotifierService } from 'angular-notifier'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private readonly notifier: NotifierService
  constructor(notifierService: NotifierService) {
    this.notifier = notifierService
  }
  ngOnInit() {}
  test_notif() {
    this.notifier.notify('success', 'You are awesome! I mean it!')
  }
}
