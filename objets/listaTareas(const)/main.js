
import { input, close } from "../../lib/nodeImperativo.js";
import{tareas} from "./listaTareas.js";



async function mostrarMenu() {
        let hoy=new Date();
        let fecha =hoy.toISOString().split('T')[0] ;
        let hora =hoy.toISOString().split('T')[1].split('.')[0];
        console.log("Fecha: "+fecha+"\nHora:"+hora);
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
        await tareas.verTareas();
        break;
      case "2":
        console.log("🔍 Buscar una Tarea");
        await tareas.buscarTarea();
        break;
      case "3":
        console.log("➕ Agregar una Tarea");
        await tareas.crearTarea();
        break;
      case "4":
        console.log("✍ Editar una Tarea");
        await tareas.editarTarea();
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