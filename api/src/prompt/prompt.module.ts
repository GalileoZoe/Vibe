import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PromptService } from './prompt.service';
import { PromptController } from './prompt.controller';
import { Prompt, PromptSchema } from './schema/prompt.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Prompt.name, schema: PromptSchema }]),
  ],
  controllers: [PromptController],
  providers: [PromptService],
  exports: [PromptService], // opcional si otros módulos lo usan
})
export class PromptModule {}
