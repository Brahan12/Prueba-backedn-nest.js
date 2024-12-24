// src/credit-simulation/credit-simulation.module.ts
import { Module } from '@nestjs/common';
import { CreditSimulationService } from './services/credit-simulation.service';
import { CreditSimulationController } from './controllers/credit-simulation.controller';

@Module({
  providers: [CreditSimulationService],
  controllers: [CreditSimulationController],
})
export class CreditSimulationModule {}
