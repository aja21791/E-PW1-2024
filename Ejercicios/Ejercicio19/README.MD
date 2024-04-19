# Ejercicio 19

## Descripción

1. Define dos interfaces que representen distintos tipos de objetos.
2. Crea una función que tome un parámetro de tipo que sea una intersección de estas dos interfaces.
   
```typescript
//1
interface Punto {
    x: number;
    y: number;
}

interface Circulo {
    radio: number;
}

//2
function imprimirPuntoYCirculo(objeto: Punto & Circulo) {
    console.log(objeto);
}

let punto: Punto = { x: 3, y: 4 };
let circulo: Circulo = { radio: 5 };

imprimirPuntoYCirculo({ ...punto, ...circulo });
imprimirPuntoYCirculo({ x: 3, y: 4, radio: 5 });
```