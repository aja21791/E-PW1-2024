/* 
- Curso: Programación Web 1
- Alumno: Manuel Alexander Ajanel Jerónimo
- Carné: 21791

----- HOJA DE TRABAJO SOBRE EJERCICIOS EN TYPESCRIPT -----

// EJERCICIO 6: USO DE PROMESAS Y ASYNC/AWAIT //
/* 
1. Escribe una función que simule una llamada asíncrona que devuelva una promesa con un mensaje después de cierto tiempo.
2. Utiliza async/await para llamar a esta función y mostrar el mensaje en la consola.
*/

//1
function llamadaAsincrona(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('¡Llamada asíncrona completada!');
        }, 2000);
    });
}

//2
async function mostrarMensaje(): Promise<void> {
    const mensaje = await llamadaAsincrona();
    console.log(mensaje);
}

mostrarMensaje();