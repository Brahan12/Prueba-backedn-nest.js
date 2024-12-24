// src/credit-simulation/controllers/credit-simulation.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreditSimulationService } from '../services/credit-simulation.service';
import { SimulateCreditDto } from '../dto/simulate-credit.dto';

@Controller('credit-simulation')
export class CreditSimulationController {
  constructor(private readonly creditSimulationService: CreditSimulationService) {}

  // Endpoint POST para simular crédito
  @Post('simulate')
  simulate(@Body() simulateCreditDto: SimulateCreditDto) {
    return this.creditSimulationService.simulateCredit(simulateCreditDto);
  }

  // Endpoint GET para obtener el perfil crediticio de un cliente
  @Get('client/:clientId/profile')
  getClientProfile(@Param('clientId') clientId: number) {
    return this.creditSimulationService.getClientProfile(clientId);
  }
}
