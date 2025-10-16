import { Module } from '@nestjs/common';
import { LugaresTuristicosService } from './lugares-turisticos.service';
import { LugaresTuristicosController } from './lugares-turisticos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LugaresTuristicos } from './entities/lugares-turistico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LugaresTuristicos])],
  controllers: [LugaresTuristicosController],
  providers: [LugaresTuristicosService],
  exports: [TypeOrmModule],
})
export class LugaresTuristicosModule {}
