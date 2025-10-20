import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { TextService } from './text.service';
import { CreateText } from './dto/createtext.dto';
import { UpdateText } from './dto/updatetext.dto';

@Controller('texts')
export class TextController {
  constructor(private readonly textService: TextService) {}

  @Post() create(@Body() dto: CreateText) {
    return this.textService.create(dto);
  }

  @Get() findAll() {
    return this.textService.findAll();
  }

  @Get('session/:sessionId') findBySession(@Param('sessionId') sessionId: string) {
    return this.textService.findBySession(sessionId);
  }

  @Get('user/:userId') findByUser(@Param('userId') userId: string) {
    return this.textService.findByUser(userId);
  }

  @Patch(':id') update(@Param('id') id: string, @Body() dto: UpdateText) {
    return this.textService.update(id, dto);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.textService.remove(id);
  }
}
