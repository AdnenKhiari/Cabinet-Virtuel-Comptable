import { Component } from '@angular/core'
import { NotificationService } from './services/notification.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6'

  constructor(protected _notificationSvc: NotificationService) {}

  sendInfo() {
    this._notificationSvc.info('Hello World', 'This is an information', 5000)
  }

  sendSuccess() {
    this._notificationSvc.success('Hello World', 'This is a success !')
  }

  sendWarning() {
    this._notificationSvc.warning('Hello World', 'This is a warning !')
  }

  sendError() {
    this._notificationSvc.error('Hello World', 'This is an error !')
  }

  loremIpsum() {
    this._notificationSvc.error(
      'Lorem ipsum',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.',
      10000
    )
  }
}
