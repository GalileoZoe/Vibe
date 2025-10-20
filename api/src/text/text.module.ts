import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TextService } from './text.service';
import { TextController } from './text.controller';
import { Text, TextSchema } from './schema/text.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Text.name, schema: TextSchema }]),
  ],
  controllers: [TextController],
  providers: [TextService],
  exports: [TextService], // opcional si otros módulos lo usan
})
export class TextModule {}
