/* 
- Curso: Programación Web 1
- Alumno: Manuel Alexander Ajanel Jerónimo
- Carné: 21791

----- HOJA DE TRABAJO SOBRE EJERCICIOS EN TYPESCRIPT -----

// EJERCICIO 14: USO DE DECORADORES DE CLASE //
/* 
1. Define un decorador de clase llamado registraClase que registre automáticamente el nombre de la clase en una lista cuando se instancie.
2. Crea una clase que utilice este decorador y muestra la lista de clases registradas.
*/

//1

const clasesRegistradas: string[] = [];

function registraClase(constructor: Function) {
    clasesRegistradas.push(constructor.name);
}


//2

@registraClase
class Persona {
    constructor(public nombre: string, public edad: number) {}
}

@registraClase
class Producto {
    constructor(public nombre: string, public precio: number) {}
}

console.log(clasesRegistradas); // ['Persona', 'Producto']
