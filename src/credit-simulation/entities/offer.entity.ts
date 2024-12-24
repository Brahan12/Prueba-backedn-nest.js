export class Offer {
    id: number;
    clientId: number; // id del cliente
    creditProfile: string;  // AAA, BAA, AA, etc.
    amount: number; // monto
    status: string;  // Activo, Inactivo, Desembolsado
    debtCapacity: number;  // Capacidad de endeudamiento mensual
  }