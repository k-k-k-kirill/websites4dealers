export enum NotificationType {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning",
}

export interface NotificationState {
  type: NotificationType;
  message: string;
}
