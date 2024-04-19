/* 
- Curso: Programación Web 1
- Alumno: Manuel Alexander Ajanel Jerónimo
- Carné: 21791

----- HOJA DE TRABAJO SOBRE EJERCICIOS EN TYPESCRIPT -----

// EJERCICIO 2: FUNCIONES Y TIPOS DE DATOS //
/* 
1. Escribe una función que tome un arreglo de números y devuelva la suma de todos ellos.
2. Escribe una función que tome un arreglo de strings y devuelva la concatenación de todos ellos.
3. Escribe una función que tome un número y devuelva su factorial.
*/

//1

function sumaArray(array: number[]): number {
  let suma: number = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }

  return suma;
}

//2

function concatenacionArray(array: string[]): string {
  let concatenacion: string = "";

  for (let i = 0; i < array.length; i++) {
    concatenacion += array[i];
  }

  return concatenacion;
}
