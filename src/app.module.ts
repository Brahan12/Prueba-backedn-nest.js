// src/app.module.ts
import { Module } from '@nestjs/common';
import { CreditSimulationModule } from './credit-simulation/credit-simulation.module';

@Module({
  imports: [CreditSimulationModule],
})
export class AppModule {}

