# Ejercicio 8

## Descripción

1. Escribe una función que tome un número como parámetro y devuelva una promesa que se resuelva si el número es par y se rechace si es impar.
2. Maneja los errores utilizando try/catch al llamar a esta función y muestra un mensaje adecuado en cada caso.
   
```typescript
//1
function verificarParidad(numero: number): Promise<void> {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve();
        } else {
            reject();
        }
    });
}

//2
async function mostrarMensajeParidad(numero: number): Promise<void> {
    try {
        await verificarParidad(numero);
        console.log('El número es par.');
    } catch {
        console.log('El número es impar.');
    }
}

```