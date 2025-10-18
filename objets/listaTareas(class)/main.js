import { input, close } from "../../lib/nodeImperativo.js";
import { listaTareas } from "./listaTareas.js";
const misTareas= new listaTareas();

async function mostrarMenu() {
        console.log("¿Qué deseas hacer?");
        console.log("[1] Ver Mis Tareas.");
        console.log("[2] Buscar una Tarea.");
        console.log("[3] Agregar una Tarea.");
        console.log("[4] Editar una Tarea.");
        console.log("[0] Salir.");
}

// Función principal
async function main() {
  let opcion;
  let nombreUsuario;

  console.log("¡Bienvenido al Gestor de Tareas!");
  do{
    nombreUsuario = await input("Por favor, ingresa tu nombre: ");
  }while(!nombreUsuario || nombreUsuario.trim() === "");
  console.log("¡Hola " + nombreUsuario + "!");

  do {
    mostrarMenu();
    opcion = await input("> ");

    switch (opcion) {
      case "1":
        console.log("👀 Ver mis tareas");
        await misTareas.verTarea();
        break;
      case "2":
        console.log("🔍 Buscar una Tarea");
        await misTareas.buscarTarea();
        break;
      case "3":
        console.log("➕ Agregar una Tarea");
        await misTareas.crearTarea();
        break;
      case "4":
        console.log("✍ Editar una Tarea");
        await misTareas.editarTarea();
        break;
      case "0":
        console.log("👋 Saliendo del sistema...");
        break;

      default:
        console.log("Opción inválida. Por favor, ingrese una opción del menú.");
    }

  } while (opcion !== "0");

  close();
}

// Ejecutar el programa
main();