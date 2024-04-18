export interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
}

export class TareasService {
  public tareas: Tarea[] = [];

  public agregarTarea(tarea: Tarea): void {
    this.tareas.push(tarea);
  }

  public eliminarTarea(id: number): void {
    const index = this.tareas.findIndex((tarea) => tarea.id === id);
    if (index !== -1) {
      this.tareas.splice(index, 1);
    }
  }

  public actualizarTarea(id: number, tareaActualizada: Tarea): void {
    const index = this.tareas.findIndex((tarea) => tarea.id === id);
    if (index !== -1) {
      this.tareas[index] = tareaActualizada;
    }
  }

  public listarTareas(): Tarea[] {
    return this.tareas;
  }
}
