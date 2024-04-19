/* 
- Curso: Programación Web 1
- Alumno: Manuel Alexander Ajanel Jerónimo
- Carné: 21791

----- HOJA DE TRABAJO SOBRE CLASES EN TYPESCRIPT -----

// EJERCICIO 4: USO DE MODULOS //
/* 
1. Crea un módulo llamado Operaciones que contenga una función para calcular el área de un círculo.
2. Importa este módulo en otro archivo y utiliza la función para calcular el área de un círculo con un radio dado.
*/

//1
export function calcularAreaCirculo(radio: number): number {
    return Math.PI * Math.pow(radio, 2);
}