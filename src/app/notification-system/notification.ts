export class Notification {

  constructor(   //Notifications propreties
    public id: number,
    public type: NotificationType,
    public title: string,
    public message: string,
    public timeout: number,
  ) { }

}

export enum NotificationType {
  success = 0,  //types of notifications 
  warning = 1,
  error = 2,
  info = 3
}
