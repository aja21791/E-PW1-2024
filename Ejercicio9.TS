/* 
- Curso: Programación Web 1
- Alumno: Manuel Alexander Ajanel Jerónimo
- Carné: 21791

----- HOJA DE TRABAJO SOBRE EJERCICIOS EN TYPESCRIPT -----

// EJERCICIO 9: APLICACION CRUD //
/* 
1. Crea una interfaz para representar un objeto del tipo Tarea con propiedades id, titulo y completada.
2. Implementa una clase TareasService que tenga métodos para agregar, eliminar, actualizar y listar tareas.
3. Utiliza esta clase para crear una aplicación CRUD básica en la línea de comandos.
*/

//1
interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
}

//2
class TareasService {
    tareas: Tarea[] = [];

    agregarTarea(tarea: Tarea): void {
        this.tareas.push(tarea);
    }

    eliminarTarea(id: number): void {
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    }

    actualizarTarea(id: number, tareaActualizada: Tarea): void {
        const tareaIndex = this.tareas.findIndex(tarea => tarea.id === id);
        this.tareas[tareaIndex] = tareaActualizada;
    }

    listarTareas(): void {
        console.log(this.tareas);
    }
}

//3

const tareasService = new TareasService();

tareasService.agregarTarea({ id: 1, titulo: 'Hacer la tarea', completada: false });
tareasService.agregarTarea({ id: 2, titulo: 'Estudiar para el examen', completada: false });
tareasService.agregarTarea({ id: 3, titulo: 'Ir al supermercado', completada: true });

tareasService.listarTareas();

tareasService.eliminarTarea(2);

tareasService.listarTareas();

tareasService.actualizarTarea(3, { id: 3, titulo: 'Ir al supermercado', completada: false });

tareasService.listarTareas();


