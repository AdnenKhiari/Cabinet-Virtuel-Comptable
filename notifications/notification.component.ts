// notification.component.ts
import { Component, OnInit } from '@angular/core';
import { NotificationService, NotificationMessage, NotificationType } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications: NotificationMessage[] = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    // Subscribe to notification messages from the service.
    this.notificationService.getNotifications().subscribe((notification: NotificationMessage) => {
      // Display the notification message to the user.
      this.notifications.push(notification);

      // Optionally, remove the oldest notification after a certain period for error/info notifications.
      if (notification.type !== NotificationType.Success) {
        setTimeout(() => {
          this.notifications.shift(); // Remove the oldest notification
        }, 5000); // Remove after 5 seconds (adjust as needed)
      }
    });
  }

  closeNotification(index: number) {
    // Remove the notification when the close button is clicked.
    this.notifications.splice(index, 1);
  }
}