export interface INotification {
  id: number;
  user_id: number;
  bet_id: number;
  notification_type: string;
  read: boolean;
  created_at: Date;
  updated_at: Date;
}
