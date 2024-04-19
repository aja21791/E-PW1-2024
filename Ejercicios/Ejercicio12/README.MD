# Ejercicio 12

## Descripción

1. Crea una función que simule dos operaciones asíncronas que devuelvan promesas.
2. Utiliza Promise.all() para ejecutar ambas operaciones de forma concurrente.
3. Maneja los resultados de ambas operaciones cuando ambas promesas se resuelvan.
   
```typescript
//1
function operacion1(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
}

function operacion2(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 3000);
  });
}

//2

Promise.all([operacion1(), operacion2()])
  .then(([resultado1, resultado2]) => {
    console.log(`Operación 1: ${resultado1}`);
    console.log(`Operación 2: ${resultado2}`);
  })
  .catch((error) => {
    console.error(error);
  });
```