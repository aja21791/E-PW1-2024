# Ejercicio 13

## Descripción

1. Define un tipo llamado Resultado que sea una unión de number y string.
2. Escribe una función que tome un parámetro y devuelva un resultado de tipo Resultado.
3. Llama a esta función con diferentes tipos de parámetros y maneja el resultado según corresponda.
   
```typescript
//1

type Resultado = number | string;

//2

function obtenerResultado(parametro: number | string): Resultado {
    if (typeof parametro === 'number') {
        return parametro * 2;
    } else {
        return `El parámetro ${parametro} no es un número`;
    }
}

//3

console.log(obtenerResultado(5)); // 10
console.log(obtenerResultado('hola')); // El parámetro hola no es un número
```