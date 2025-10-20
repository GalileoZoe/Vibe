import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { Settings, SettingsSchema } from './schema/settings.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Settings.name, schema: SettingsSchema }]),
    UserModule,
  ],
  controllers: [SettingsController],
  providers: [SettingsService],
  exports: [SettingsService], // opcional si otros módulos lo usan
})
export class SettingsModule {}
