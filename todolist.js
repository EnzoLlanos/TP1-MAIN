// =======================
// Menú Principal en Node.js
// =======================

const { input, close } = require("./lib/nodeImperativo");

// Lista de tareas en memoria
let tareas = [];

// Función para mostrar el menú
function mostrarMenu() {
  console.log("\n¡Hola Olivia!");
  console.log("¿Qué deseas hacer?");
  console.log("[1] Ver Mis Tareas.");
  console.log("[2] Buscar una Tarea.");
  console.log("[3] Agregar una Tarea.");
  console.log("[0] Salir.");
}
async function verPorEstado() {
  let menuEstado;
  do {

    console.log("\nEliga un estado");
    console.log("[1] En Curso");
    console.log("[2] Pendiente");
    console.log("[3] Terminada");
    console.log("[4] Cancelada");
    console.log("[0] Volver")
    menuEstado = await input("<");

  } while (!menuEstado || !["1", "2", "3", "4", "0"].includes(menuEstado.trim()))

  switch (menuEstado) {
    case "1":
      tareas.forEach(tarea => {
        if (tarea.estado === "En Curso")
          console.log(tarea);
      });
      break;
    case "2":
      tareas.forEach(tarea => {
        if (tarea.estado === "Pendiente")
          console.log(tarea);
      })
      break;
    case "3":
      tareas.forEach(tarea => {
        if (tarea.estado === "Terminada")
          console.log(tarea);
      })
      break;
    case "4":
      tareas.forEach(tarea => {
        if (tarea.estado === "Cancelada")
          console.log(tarea)
      })
      break;
    case "0":
      return;
  }

}

async function verPorDificultad() {
  let menuDificultad;
  do {
    console.log("Elija uana dificultad");
    console.log("[1] Facil");
    console.log("[2] Medio");
    console.log("[3] Dificil");
    console.log("[4] Volver");
    menuDificultad = await input("...");
  } while (!menuDificultad || !["1", "2", "3", "4"].includes(menuDificultad.trim()))

  switch (menuDificultad) {
    case "1":
      tareas.forEach(tarea => {
        if (tarea.dificultad === "Facil")
          console.log(tarea);
      })
      break;
    case "2":
      tareas.forEach(tarea => {
        if (tarea.dificultad === "Medio")
          console.log(tarea);
      })
      break;
    case "3":
      tareas.forEach(tarea => {
        if (tarea.dificultad === "Dificil")
          console.log(tarea);
      })
      break;
    case "4":
      return;
  }
}

async function verCaducadas() {
  let hoy = new Date();
  tareas.forEach(tarea => {
    if (tarea.vencimiento < hoy)
      console.log(tarea);
    else {
      console.log("No hay tareas caducadas");
      return;
    }
  })

}

async function vertareas() {
  let menuVerTareas;
  do {
    console.log("\n[1] Ver todas las tareas");
    console.log("[2] Ver tareas por estado");
    console.log("[3] Ver tareas por dificultad");
    console.log("[4] Ver tareas caducadas");
    console.log("[0] Volver");
    menuVerTareas = await input("<")
  } while (!menuVerTareas || !["1", "2", "3", "4", "5"].includes(menuVerTareas.trim()))
  switch (menuVerTareas) {
    case "1":
      console.log("\nTodas las tareas:");
      for (let tarea of tareas) {
        console.log("\n",tarea);
      }
      break;
    case "2":
      await verPorEstado();
      break;
    case "3":
      await verPorDificultad();
      break;
    case "4":
      await verCaducadas();
      break;
    case "5":
      return;
  }

}
async function buscarTarea() {
  let menubuscar
  do {
    console.log("Elija una opcion");
    console.log("[1] Buscar por nombre");
    console.log("[2] Buscar por ID");
    console.log("[0] Volver");
    menubuscar = await input("<");
  } while (!menubuscar || !["1", "2", "3"].includes(menubuscar.trim()))
  switch (menubuscar) {
    case "1":
      await buscarNombre();
      break;
    case "2":
      await buscarId();
      break;
    case "0":
      return;
  }
}
async function buscarNombre() {
  let buscarNom = await input("Buscar...");
  tareas.forEach(tarea => {
    if (tarea.titulo.toLowerCase().includes(buscarNom.toLowerCase())) {
      console.log(tarea);
      encontrada = true;
    }
  })
  if (!encontrada) {
    console.log("❌❌ No se encontro ninguna tarea que coincida ❌❌");
  }
}

async function buscarId() {
  let buscarPorID = await input("Buscar...");
  tareas.forEach(tarea => {
    if (tarea.id === Number(buscarPorID)) {
      console.log(tarea);
    }
  })
}

async function newtarea() {
  let newtitulo;
  do {
    newtitulo = await input("\nIngrese el Titulo de la tarea\n");
  } while (!newtitulo || newtitulo.trim() === "");
  console.log("Titulo Inresado: " + newtitulo);

  let newid = tareas.length;

  let newdescripcion = await input("\nIngrese una descripcion para su tarea\n");

  console.log("\nElija un estado para su tarea (por defecto Pendiente)");
  let newestado;
  let estado = await input("\n[1]En Curso \n[2]Pendiente \n[3]Terminada \n[4]Cancelada\n");
  if (estado !== "1" && estado !== "2" && estado !== "3" && estado !== "4") {
    estado = "2";
  }
  switch (estado) {
    case "1":
      newestado = "En Curso";
      break;
    case "2":
      newestado = "Pendiente";
      break;
    case "3":
      newestado = "Terminada";
      break;
    case "4":
      newestado = "Cancelada";
      break
  }

  let newvencimiento = await input("\nIngrese una fecha de vencimiento para la tarea (opcional) formato:YYYY-MM-DD\n");
  if (newvencimiento == "") {
    let hoy = new Date()
    newvencimiento = new Date(hoy);
    newvencimiento.setFullYear(hoy.getFullYear() + 1);
  }

  console.log("\nIngrese una dificultad para la tarea (por defecto facil)");
  let newdificultad;
  let dificultadMenu = await input("\n[1]Facil \n[2]Medio \n[3]Dificil\n");
  console.log(typeof dificultadMenu)
  if (dificultadMenu !== "1" && dificultadMenu !== "2" && dificultadMenu !== "3") {
    dificultadMenu = "1"
  }
  switch (dificultadMenu) {
    case "1":
      newdificultad = "Facil";
      break
    case "2":
      newdificultad = "Medio";
      break
    case "3":
      newdificultad = "Dificil";
      break
    default:
      newdificultad = "Facil";
      break;
  }
  console.log("dificultadMenu--->", dificultadMenu)
  let t = {
    titulo: newtitulo,
    id: newid,
    descripcion: newdescripcion,
    estado: newestado,
    creacion: new Date(),
    edicion: null,
    vencimiento: new Date(newvencimiento),
    dificultad: newdificultad,
  };
  console.log("t------>", t)
  tareas.push(
    t
  )


  return
}
console.log("tareas->", tareas)
async function editarTarea() {

  console.log("Para Editar una tarea ingrese el ID de la misma\n");
  let editarPorid = await input("ID...\n");
  for (let tarea of tareas) {
    if (tarea.id === editarPorid)
      console.log(tarea);
    else {
      console.log("No se encontro ninguna tarea con ese ID");
      return;
    }
    let nuevotitulo = (await input("Titulo\n")).trim();
    if (nuevotitulo !== "") tarea.titulo = nuevotitulo;

    let nuevadescripcion = (await input("Descripcion\n")).trim();
    if (nuevadescripcion !== "") tarea.descripcion = nuevadescripcion;

    let nuevoEstado
    console.log("\nElija un estado para su tarea (por defecto Pendiente)\n");
    let estadoEdit = await input("\n[1]En Curso \n[2]Pendiente \n[3]Terminada \n[4]Cancelada\n");
    if (estadoEdit !== "1" && estadoEdit !== "2" && estadoEdit !== "3" && estadoEdit !== "4") {
      estadoEdit = "2";
    }
    switch (estadoEdit) {
      case "1":
        nuevoEstado = "En Curso";
        break;
      case "2":
        nuevoEstado = "Pendiente";
        break;
      case "3":
        nuevoEstado = "Terminada";
        break;
      case "4":
        nuevoEstado = "Cancelada";
        break
    }
    tarea.estado = nuevoEstado;
    tarea.edicion = new Date();
  }


}
// Función principal (main)
async function main() {
  let opcion;

  do {
    mostrarMenu();
    opcion = await input("> ");

    switch (opcion) {
      case "1":
        console.log("👀 Ver mis tareas");
        await vertareas();
        break;

      case "2":
        console.log("🔍 Buscar una Tarea");
        await buscarTarea();
        break;

      case "3":
        console.log("➕ Agregar una Tarea");
        await newtarea();
        break;
      case "4":
        console.log("✍ Editar una Tarea");
        await editarTarea();
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
