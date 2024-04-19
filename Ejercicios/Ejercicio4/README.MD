# Ejercicio 4

## Descripción

1. Crea un módulo llamado Operaciones que contenga una función para calcular el área de un círculo.
2. Importa este módulo en otro archivo y utiliza la función para calcular el área de un círculo con un radio dado.
   
```typescript
//1
export function calcularAreaCirculo(radio: number): number {
    return Math.PI * Math.pow(radio, 2);
}

//2
import { calcularAreaCirculo } from './Operaciones';

const radio = 5;
console.log(`El área del círculo con radio ${radio} es: ${calcularAreaCirculo(radio)}`);
```