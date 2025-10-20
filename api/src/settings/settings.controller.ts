import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { UpdateSettings } from './dto/updatesettings.dto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get(':userId') getSettings(@Param('userId') userId: string) {
    return this.settingsService.find(userId);
  }

  @Patch(':userId') updateSettings(@Param('userId') userId: string, @Body() dto: UpdateSettings) {
    return this.settingsService.update(userId, dto);
  }
}
