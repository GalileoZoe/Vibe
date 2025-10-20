import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSession } from './dto/createsession.dto';
import { UpdateSession } from './dto/updatesession.dto';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post() create(@Body() dto: CreateSession) {
    return this.sessionService.create(dto);
  }

  @Get() findAll() {
    return this.sessionService.findAll();
  }

  @Get('user/:userId') findByUser(@Param('userId') userId: string) {
    return this.sessionService.findByUser(userId);
  }

  @Patch(':id') update(@Param('id') id: string, @Body() dto: UpdateSession) {
    return this.sessionService.update(id, dto);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.sessionService.remove(id);
  }
}
