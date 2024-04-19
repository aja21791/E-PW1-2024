# Ejercicio 5

## Descripción

1. Crea una clase Figura con propiedades lado1 y lado2.
2. Crea subclases Rectangulo y Triangulo que hereden de la clase Figura y que tengan métodos para calcular su área.
3. Crea un objeto de cada subclase y calcula su área.
   
```typescript
//1
class Figura {
    lado1: number;
    lado2: number;

    constructor(lado1: number, lado2: number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
}

//2
class Rectangulo extends Figura {
    calcularArea(): number {
        return this.lado1 * this.lado2;
    }
}

class Triangulo extends Figura {
    calcularArea(): number {
        return (this.lado1 * this.lado2) / 2;
    }
}

//3
const rectangulo = new Rectangulo(5, 10);
console.log(`El área del rectángulo es: ${rectangulo.calcularArea()}`);
const triangulo = new Triangulo(9, 15);
console.log(`El área del triángulo es: ${triangulo.calcularArea()}`);
```