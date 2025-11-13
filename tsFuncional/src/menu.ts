export {};
// Importar las utilidades desde el módulo ESM
// @ts-ignore
import { input, close } from "../../lib/nodeImperativo.js"
import * as readline from "readline-sync";
import { ListaTareas } from "./listaTareas";
function mostrarMenu() {
  console.log("\n¡Hola Olivia!");
  console.log("¿Qué deseas hacer?");
  console.log("[1] Ver Mis Tareas.");
  console.log("[2] Buscar una Tarea.");
  console.log("[3] Agregar una Tarea.");
  console.log("[4] Editar una Tarea.");
  console.log("[0] Salir.");
}

export function pedirTitulo(){
    let titulo: string =readline.question("ingrese el titulo de la tarea")
    return titulo;
}


 function menu() {
  let opcion;
  do {
    mostrarMenu();
    opcion = readline.question("> ");

    switch (opcion) {
      case "1":
        console.log("👀 Ver mis tareas");
        
        break;

      case "2":
        console.log("🔍 Buscar una Tarea");
        
        break;

      case "3":
        console.log("➕ Agregar una Tarea");
       
        break;
      case "4":
        console.log("✍ Editar una Tarea");
        
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
menu();