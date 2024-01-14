export class NotificationBarModel {
  message: string
  icon?: string
  type: string
  isHidden?: boolean

  constructor(message: string, icon: string, type: string, isHidden: boolean) {
    this.message = message
    this.icon = icon
    this.type = type
    this.isHidden = isHidden
  }
}
