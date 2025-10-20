import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateNotification } from './dto/createnotification.dto';
import { UpdateNotification } from './dto/updatenotification.dto';
import { Notification, NotificationDocument } from './schema/notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name) private notificationModel: Model<NotificationDocument>
  ) {}

  // Crear notificación
  create(dto: CreateNotification) {
    return this.notificationModel.create(dto);
  }

  // Obtener todas las notificaciones
  findAll() {
    return this.notificationModel.find().populate('userId').exec();
  }

  // Obtener notificaciones por usuario
  findByUser(userId: string) {
    return this.notificationModel.find({ userId }).exec();
  }

  // Actualizar notificación
  update(id: string, dto: UpdateNotification) {
    return this.notificationModel.findByIdAndUpdate(id, dto, { new: true });
  }

  // Marcar como leída
  markAsRead(id: string) {
    return this.notificationModel.findByIdAndUpdate(id, { read: true }, { new: true });
  }

  // Eliminar notificación
  remove(id: string) {
    return this.notificationModel.findByIdAndDelete(id);
  }
}
