import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TipService } from './tip.service';
import { TipController } from './tip.controller';
import { Tip, TipSchema } from './schema/tip.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tip.name, schema: TipSchema }]),
  ],
  controllers: [TipController],
  providers: [TipService],
  exports: [TipService], // opcional si otros módulos lo usan
})
export class TipModule {}
