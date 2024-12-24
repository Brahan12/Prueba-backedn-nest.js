// src/credit-simulation/services/credit-simulation.service.ts
import { Injectable } from '@nestjs/common';
import { SimulateCreditDto } from '../dto/simulate-credit.dto';

@Injectable()
export class CreditSimulationService {
  // Simular crédito según el monto, cliente y plazo
  simulateCredit(simulateCreditDto: SimulateCreditDto) {
    const { clientId, amount, term } = simulateCreditDto;

    // Validar que el plazo esté en los valores permitidos
    const allowedTerms = [12, 24, 36, 48, 60];
    if (!allowedTerms.includes(term)) {
      return { message: `El plazo debe ser uno de los siguientes: ${allowedTerms.join(', ')}.` };
    }
    
    // Lógica para obtener el perfil crediticio del cliente
    const creditProfile = this.getClientProfile(clientId);
    
    // Lógica para aplicar la tasa de interés según el perfil y el monto
    const interestRate = this.getInterestRate(creditProfile, amount);
    
    // Lógica para calcular la cuota mensual
    const monthlyPayment = this.calculateMonthlyPayment(amount, interestRate, term);
    
    // Lógica para calcular el seguro (basado en la edad del cliente)
    const insuranceFee = this.calculateInsuranceFee(monthlyPayment, clientId);
    
    // Lógica para verificar que la cuota total no exceda la capacidad de endeudamiento
    const totalPayment = monthlyPayment + insuranceFee;
    if (totalPayment > this.getClientDebtCapacity(clientId)) {
      return { message: 'La cuota total excede la capacidad de endeudamiento del cliente.' };
    }
    
    return {
      clientId,
      amount,
      term,
      interestRate,
      monthlyPayment,
      insuranceFee,
      totalPayment,
    };
  }

  // Obtener el perfil crediticio del cliente (simulado para pruebas)
  getClientProfile(clientId: number): string {
    // Aquí deberías implementar la lógica para obtener el perfil del cliente
    // Esto puede ser una consulta a la base de datos o un valor fijo para pruebas
    if (clientId === 123) {
      return 'AAA'; // Ejemplo: cliente con perfil AAA
    }
    return 'BAA'; // Otro perfil de ejemplo
  }

  // Lógica para obtener la tasa de interés según el perfil y monto
  private getInterestRate(profile: string, amount: number): number {
    // Aquí deberías implementar la lógica para obtener la tasa de interés
    if (profile === 'AAA') {
      if (amount < 7000000) return 23.45;
      if (amount < 15000000) return 20.10;
      if (amount < 50000000) return 17.60;
      if (amount < 80000000) return 15.10;
      return 13.10;
    }
    // Lógica para otros perfiles...
    return 26.10; // Tasa por defecto
  }

  // Lógica para calcular la cuota mensual
  private calculateMonthlyPayment(amount: number, interestRate: number, term: number): number {
    const rate = interestRate / 100 / 12; // Convertir tasa anual a mensual
    const monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -term));
    return monthlyPayment;
  }

  // Lógica para calcular el seguro según la edad del cliente
  private calculateInsuranceFee(monthlyPayment: number, clientId: number): number {
    // Aquí deberías implementar la lógica para obtener la edad del cliente
    const clientAge = this.getClientAge(clientId);
    let insuranceFee = 0;

    // Calculamos el porcentaje del seguro según la edad
    if (clientAge >= 19 && clientAge <= 30) {
      insuranceFee = monthlyPayment * 0.03; // 3% para clientes de 19-30 años
    } else if (clientAge >= 31 && clientAge <= 60) {
      insuranceFee = monthlyPayment * 0.04; // 4% para clientes de 31-60 años
    } else if (clientAge >= 61 && clientAge <= 70) {
      insuranceFee = monthlyPayment * 0.05; // 5% para clientes de 61-70 años
    }

    return insuranceFee;
  }

  // Lógica para obtener la edad del cliente (simulada)
  private getClientAge(clientId: number): number {
    // Simulación de edad del cliente (esto debe ser consultado en la base de datos)
    // Aquí puedes devolver una edad fija para pruebas o hacer una consulta real
    if (clientId === 123) {
      return 30; // Ejemplo: cliente de 30 años
    }
    return 50; // Otro ejemplo: cliente de 50 años
  }

  // Lógica para obtener la capacidad de endeudamiento del cliente
  private getClientDebtCapacity(clientId: number): number {
    // Aquí deberías implementar la lógica para obtener la capacidad de endeudamiento del cliente
    return 200000; // Ejemplo: capacidad de pago mensual de 200,000
  }
}
