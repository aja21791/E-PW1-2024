/* 
- Curso: Programación Web 1
- Alumno: Manuel Alexander Ajanel Jerónimo
- Carné: 21791

----- HOJA DE TRABAJO SOBRE EJERCICIOS EN TYPESCRIPT -----

// EJERCICIO 12: USO DE PROMESAS CON MULTIPLES OPERACIONES //
/* 
1. Crea una función que simule dos operaciones asíncronas que devuelvan promesas.
2. Utiliza Promise.all() para ejecutar ambas operaciones de forma concurrente.
3. Maneja los resultados de ambas operaciones cuando ambas promesas se resuelvan.
*/

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

//3
// Resultado esperado:
// Operación 1: 5
// Operación 2: 10
