# Ejercicio 16

## Descripción

1. Escribe una función que tome una fecha como argumento y devuelva la fecha del día siguiente.
2. Utiliza TypeScript para garantizar que la entrada y la salida sean del tipo Date.
   
```typescript
//1
function siguienteDia(fecha: Date): Date {
    let diaSiguiente = new Date(fecha);
    diaSiguiente.setDate(diaSiguiente.getDate() + 1);
    return diaSiguiente;
}

//2
let fecha = new Date();
console.log(siguienteDia(fecha));
```