import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotification } from './dto/createnotification.dto';
import { UpdateNotification } from './dto/updatenotification.dto';


@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post() create(@Body() dto: CreateNotification) {
    return this.notificationService.create(dto);
  }

  @Get() findAll() {
    return this.notificationService.findAll();
  }

  @Get('user/:userId') findByUser(@Param('userId') userId: string) {
    return this.notificationService.findByUser(userId);
  }

  @Patch(':id') update(@Param('id') id: string, @Body() dto: UpdateNotification) {
    return this.notificationService.update(id, dto);
  }

  @Patch('read/:id') markAsRead(@Param('id') id: string) {
    return this.notificationService.markAsRead(id);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.notificationService.remove(id);
  }
}
