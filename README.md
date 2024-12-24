# Prueba-Backend-Nest.js

Este microservicio proporciona simulaciones de crédito para clientes, incluyendo validaciones de tasas de interés, seguros y capacidad de endeudamiento.

## Requisitos previos

- Node.js (v14 o superior)
- npm (v6 o superior)
- NestJS

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Brahan12/Prueba-Backend-Nest.js.git
   cd credit-simulation-service
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución en Desarrollo

1. Para iniciar el servidor de desarrollo, ejecuta:
   ```bash
   npm run start:dev
   ```

2. El microservicio estará disponible en `http://localhost:3000`.

## Uso

Para simular un crédito, realiza una solicitud POST a la siguiente ruta: /credit-simulation/simulate

### Cuerpo de la solicitud:
```json
{
  "clientId": 123,
  "amount": 500000,
  "term": 12
}