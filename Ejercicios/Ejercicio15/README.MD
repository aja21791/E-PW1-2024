# Ejercicio 15

## Descripción

1. Define un espacio de nombres llamado Geometria.
2. Dentro del espacio de nombres, define una clase llamada Punto con propiedades x e y.
3. Utiliza esta clase dentro y fuera del espacio de nombres para crear puntos y realizar operaciones con ellos.
   
```typescript
//1
namespace Geometria {
    //2
    export class Punto {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }
}

//3
let punto1 = new Geometria.Punto(3, 4);
let punto2 = new Geometria.Punto(5, 6);

console.log(punto1);
console.log(punto2);
```