import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { CreatePrompt } from './dto/createprompt.dto';
import { UpdatePrompt } from './dto/updateprompt.dto';

@Controller('prompts')
export class PromptController {
  constructor(private readonly promptService: PromptService) {}

  @Post() create(@Body() dto: CreatePrompt) {
    return this.promptService.create(dto);
  }

  @Get() findAll() {
    return this.promptService.findAll();
  }

  @Get('category/:category') findByCategory(@Param('category') category: string) {
    return this.promptService.findByCategory(category);
  }

  @Patch(':id') update(@Param('id') id: string, @Body() dto: UpdatePrompt) {
    return this.promptService.update(id, dto);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.promptService.remove(id);
  }
}
