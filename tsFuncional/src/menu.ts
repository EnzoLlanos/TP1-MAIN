export {};
import { ListaTareas } from "./listaTareas";
import * as readline from "readline-sync";
import { menuTareas, mostrarTareas, menuBuscarTarea, menuEditarTarea } from "./metodos";
let arrayTareas = new ListaTareas([]);


function mostrarMenu() {
  console.log("\n¡Hola Olivia!");
  console.log("¿Qué deseas hacer?");
  console.log("[1] Ver Mis Tareas.");
  console.log("[2] Buscar una Tarea.");
  console.log("[3] Agregar una Tarea.");
  console.log("[4] Editar una Tarea.");
  console.log("[0] Salir.");
}

export function menu() {
  let opcion: string;
  do {
    mostrarMenu();
    opcion = readline.question("> ").trim();
    switch (opcion) {
      case "1":
        console.log("👀 Ver mis tareas");
        mostrarTareas(arrayTareas);
        break;

      case "2":
        console.log("🔍 Buscar una Tarea");
        menuBuscarTarea(arrayTareas);
        break;

      case "3":
        console.log("➕ Agregar una Tarea");
        arrayTareas.lista=menuTareas(arrayTareas);
        console.log("✅ Tarea agregada con éxito");
        break;

      case "4":
        console.log("✍ Editar una Tarea");
        let idEditar: number = readline.questionInt("Ingrese el ID de la tarea a editar: ");
        arrayTareas.lista=menuEditarTarea(arrayTareas, idEditar);
        console.log("✅ Tarea editada con éxito");
        break;

      case "0":
        console.log("👋 Saliendo del sistema...");
        break;

      default:
        console.log("Opción inválida. Por favor, ingrese una opción del menú.");
    }
  } while (opcion != "0");

}

