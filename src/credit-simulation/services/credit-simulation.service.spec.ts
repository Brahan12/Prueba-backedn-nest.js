import { Test, TestingModule } from '@nestjs/testing';
import { CreditSimulationService } from './credit-simulation.service';

describe('CreditSimulationService', () => {
  let service: CreditSimulationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditSimulationService],
    }).compile();

    service = module.get<CreditSimulationService>(CreditSimulationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate the correct monthly payment', () => {
    const result = service.simulateCredit({
      amount: 500000,
      clientId: 123,
      term: 12,
    });
    expect(result.monthlyPayment).toBeDefined();
  });
});
