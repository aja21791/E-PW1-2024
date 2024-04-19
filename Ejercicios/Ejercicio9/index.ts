import * as readline from "readline";
import { TareasService, Tarea } from "./servicio";

const tareasService = new TareasService();

// Home
function printMenu() {
  console.log("=== Lista De Tareas ===");
  console.log("1. Agregar Tarea.");
  console.log("2. Eliminar Tarea.");
  console.log("3. Actualizar Tarea.");
  console.log("4. Listar Tareas.");
  console.log("0. Salir.");
}

// Conexión
function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function readNumber(name: string): Promise<string> {
  const txt = name;
  return new Promise<string>(async (resolve) => {
    const rl = createInterface();

    rl.question(txt, (input: string | PromiseLike<string>) => {
      rl.close();
      resolve(input);
    });
  });
}

let idCounter = 1;

async function leerTareas(): Promise<void> {
  return new Promise<void>(async (resolve) => {
    const rl = createInterface();

    rl.question("Ingresa el titulo de la tarea: ", (titulo: string) => {
      rl.close();
      const nuevaTarea: Tarea = {
        id: idCounter++,
        titulo,
        completada: false,
      };
      tareasService.agregarTarea(nuevaTarea);
      resolve();
    });
  });
}

async function eliminarTarea() {
  const id = parseInt(
    await readNumber("Ingresa el ID de la tarea a eliminar: ")
  );
  tareasService.eliminarTarea(id);
  console.log(`Tarea ${id} eliminada.`);
  await waitForKey();
}

async function actualizarTarea() {
  const id = parseInt(
    await readNumber("Ingresa el ID de la tarea a actualizar: ")
  );
  const titulo = await readNumber("Ingresa el nuevo titulo de la tarea: ");
  const completada =
    (await readNumber(
      "Ingresa el estado de la tarea (true para completada, false para no completada): "
    )) === "true";
  const tareaActualizada: Tarea = { id, titulo, completada };
  tareasService.actualizarTarea(id, tareaActualizada);
  console.log(`Tarea ${id} actualizada.`);
  await waitForKey();
}

async function listarTareas() {
  const tareas = tareasService.listarTareas();
  tareas.forEach((tarea) => {
    console.log(
      `ID: ${tarea.id}, Título: ${tarea.titulo}, Completada: ${tarea.completada}`
    );
  });
  await waitForKey();
}

function waitForKey(): Promise<void> {
  return new Promise<void>(async (resolve) => {
    const rl = createInterface();

    rl.question("Presiona cualquier tecla para continuar...", () => {
      rl.close();
      resolve();
    });
  });
}

// Función principal
async function list() {
  // Variables globales

  let option = -1;

  while (option !== 0) {
    // Home
    printMenu();

    // Primera pregunta
    option = parseInt(await readNumber("Ingresa una opción: "));

    // Opción
    switch (option) {
      case 1: {
        await leerTareas();
        break;
      }
      case 2: {
        await eliminarTarea();
        break;
      }
      case 3: {
        await actualizarTarea();
        break;
      }
      case 4: {
        await listarTareas();
        break;
      }
      case 0: {
        console.log("Saliendo...");
        break;
      }
      default: {
        console.log("Opción inválida. Inténtalo de nuevo.");
        break;
      }
    }
  }
}

list();
