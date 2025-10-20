import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { TipService } from './tip.service';
import { CreateTip } from './dto/createtip.dto';
import { UpdateTip } from './dto/updatetip.dto';


@Controller('tips')
export class TipController {
  constructor(private readonly tipService: TipService) {}

  @Post() create(@Body() dto: CreateTip) {
    return this.tipService.create(dto);
  }

  @Get() findAll() {
    return this.tipService.findAll();
  }

  @Get('category/:category') findByCategory(@Param('category') category: string) {
    return this.tipService.findByCategory(category);
  }

  @Patch(':id') update(@Param('id') id: string, @Body() dto: UpdateTip) {
    return this.tipService.update(id, dto);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.tipService.remove(id);
  }
}
