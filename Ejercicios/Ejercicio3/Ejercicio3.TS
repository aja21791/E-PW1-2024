/* 
- Curso: Programación Web 1
- Alumno: Manuel Alexander Ajanel Jerónimo
- Carné: 21791

----- HOJA DE TRABAJO SOBRE EJERCICIOS EN TYPESCRIPT -----

// EJERCICIO 3: INTERFACES Y CLASES //
/* 
1. Crea una interfaz llamada Persona con propiedades nombre y edad.
2. Crea una clase llamada Estudiante que implemente la interfaz Persona.
3. Agrega un método a la clase Estudiante que imprima el nombre y la edad del estudiante.
*/

//1
interface Persona {
    nombre: string;
    edad: number;
}

//2 y 3

class Estudiante implements Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimirDatos(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}