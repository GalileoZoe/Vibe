export interface Notification {
  _id?: string; // generado por MongoDB
  userId: string; // referencia al usuario
  title: string;
  message: string;
  read?: boolean;
  scheduledAt?: string | Date; // opcional
  createdAt: string;
  updatedAt: string;
}
