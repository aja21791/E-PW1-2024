# Ejercicio 7

## Descripción

1. Crea una función genérica llamada revertir que tome un arreglo como argumento y devuelva el arreglo invertido.
2. Utiliza esta función con arreglos de diferentes tipos y comprueba su funcionamiento.
   
```typescript
//1
function revertir<T>(arreglo: T[]): T[] {
    return arreglo.reverse();
}

//2
const arregloNumeros = [1, 2, 3, 4, 5];
console.log(revertir(arregloNumeros));
```