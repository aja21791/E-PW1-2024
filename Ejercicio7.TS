/* 
- Curso: Programación Web 1
- Alumno: Manuel Alexander Ajanel Jerónimo
- Carné: 21791

----- HOJA DE TRABAJO SOBRE EJERCICIOS EN TYPESCRIPT -----

// EJERCICIO 7: USO DE GENERICS //
/* 
1. Crea una función genérica llamada revertir que tome un arreglo como argumento y devuelva el arreglo invertido.
2. Utiliza esta función con arreglos de diferentes tipos y comprueba su funcionamiento.
*/

//1

function revertir<T>(arreglo: T[]): T[] {
    return arreglo.reverse();
}

//2

const arregloNumeros = [1, 2, 3, 4, 5];
console.log(revertir(arregloNumeros));