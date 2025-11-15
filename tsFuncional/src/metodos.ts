import { ListaTareas } from "./listaTareas";
import {Tarea} from "./tarea";   
import * as readline from "readline-sync";
const listaDificultades: string[] = ["Facil", "Medio", "Dificil"];
const listaEstados: string[] = ["Pendiente", "En Curso", "Terminada", "Cancelada"];
//Mostrar Tareas
    export function mostrarTareas(listaTareas: ListaTareas){
        obtenerTarea(listaTareas);
    }
    export function obtenerTarea(listaTareas: ListaTareas){
        if (listaTareas.lista.length === 0) {
            console.log("No hay tareas registradas.");
            return;
        }
        return listaTareas.lista.forEach(t => {
            console.log("---------------");
            console.log(`ID: ${t.id}`);
            console.log(`Titulo: ${t.titulo}`);
            console.log(`Descripcion: ${t.descripcion}`);
            console.log(`Estado: ${t.estado}`);
            console.log(`Creacion: ${t.creacion}`);
            console.log(`Edicion: ${t.edicion}`);
            console.log(`Vencimiento: ${t.vencimiento}`);
            console.log(`Dificultad: ${t.dificultad}`);
            console.log("---------------")
        });
    }
//Editar Tareas
    export function menuEditarTarea(listaTareas:ListaTareas, id:number){
        let tareaEditada= crearTarea(listaTareas,id,true);
        let index:number= listaTareas.lista.findIndex(tarea => tarea.id === id);
        const nuevaLista= [...listaTareas.lista];
        nuevaLista[index]= tareaEditada;
        return nuevaLista;
    }
//Agregar Tareas
    export function agregarTarea( newid: number, newtitulo: string, newdescripcion: string, newestado: string, newcreacion: string, newedicion: Date | null, newvencimiento: string, newdificultad: string){
        const nuevaTarea = new Tarea( newid, newtitulo, newdescripcion, newestado, newcreacion, newedicion, newvencimiento, newdificultad);
        return nuevaTarea;
    }
    
    export function menuTareas(listaTareas: ListaTareas){
        let nuevaTarea = crearTarea(listaTareas,id(),false);
        const nuevaLista= [...listaTareas.lista, nuevaTarea];
        return nuevaLista;
    }

    //Crear Tareas
    export function crearTarea(listaTareas: ListaTareas, id:number,edit:boolean){
        let newId: number = id; 
        let contadorTareas= listaTareas.lista.length +1;
        let newTitulo: string = readline.question("Ingrese el titulo de la tarea: ", { defaultInput: `Tarea ${contadorTareas}` });
        let newDescripcion: string = readline.question("Ingrese la descripcion de la tarea: ", { defaultInput: "Sin descripcion" });
       //Estado 

        listaEstados.forEach((estado, i) => {
            console.log(`[${i}] ${estado}`);
        });
        let seleccionEstString: string = readline.question("Seleccione el estado de la tarea (0-3): ", { defaultInput: "0" });
        let newEstado: string = estado(seleccionEstString, listaEstados);
       //Vencimiento 
        let newCreacion: string = creadorDate(new Date());
        let newEdicion: Date | null = null;
        let vencimientoString: string = readline.question("Ingrese en cuantos dias vence la tarea (por defecto 30): ", { defaultInput: "30" });
        let vencimientoDias: number = parseInt(vencimientoString) || 30;
        let newVencimiento: string = creadorVen(vencimientoDias, new Date());
       //Dificultad 
        listaDificultades.forEach((dificultad, i) => {
            console.log(`[${i}] ${dificultad}`);
        });
        let seleccionDifString: string = readline.question("Seleccione la dificultad de la tarea (0-2): ");
        let newDificultad: string = dificultad(seleccionDifString, listaDificultades);

        
        return agregarTarea(newId, newTitulo, newDescripcion, newEstado, newCreacion, newEdicion, newVencimiento, newDificultad);

    }
    //ID
    function id(){
        let id:number= parseInt(crypto.randomUUID().slice(0, 4), 16)
        return id;
    }
    //Estado
    function estado(seleccionEstString:string, listaEstados:string[]){
        let seleccionEst: number = parseInt(seleccionEstString) || 0;
        return listaEstados[seleccionEst] ?? "Pendiente"
    }
    //Dificultad
    function dificultad(seleccionDifString:string, listaDificultades:string[]){
        let seleccionDif: number = parseInt(seleccionDifString) || 0;
        return listaDificultades[seleccionDif] ?? "Facil"
    }
    //Fecha Creacion
    function creadorDate(d:Date){
        return d.toLocaleDateString("es-AR");;
    }

    //Fecha Vencimiento
    function creadorVen(n:number, fecha:Date){
            const fechaVencimiento= new Date(fecha.getTime());
            fechaVencimiento.setDate(fechaVencimiento.getDate()+n);
            return fechaVencimiento.toLocaleDateString("es-AR");
       
    }


//Buscar Tareas
    export function menuBuscarTarea(listaTareas:ListaTareas){
        console.log("Como desea buscar la tarea?");
        console.log("[1] Buscar por Titulo");
        console.log("[2] Buscar por ID")
        console.log("[3] Buscar por Estado");
        console.log("[4] Buscar por Dificultad");
        let opcionBusqueda: string = readline.question("> ");
        switch(opcionBusqueda.trim()){
            case "1":
                console.log(buscarTareaTitulo(listaTareas, readline.question("Ingrese el título o parte del titulo de la tarea a buscar: ")));
                break;
            case "2":
                console.log(buscarID(listaTareas, readline.questionInt("Ingrese el ID de la tarea a buscar: ")));
                
                break;
            case "3":
                listaEstados.forEach((estado, i) => {
                    console.log(`[${i+1}]  ${estado}`);
                });
                let opEstado:string= readline.question("Ingrese el estado de la tarea a buscar: ");
                console.log(menuEstado(listaTareas,opEstado));
                break;
            case "4":
                listaDificultades.forEach((dificultad, i) => {
                    console.log(`[${i+1}] ${dificultad}`);
                });
                let opDificultad:string= readline.question("Ingrese la dificultad de la tarea a buscar: ")
                console.log(menuDificultad(listaTareas,opDificultad));
                break;
            default:
                console.log("Opción inválida");
                return;

        }
    }

    function buscarTareaTitulo(listaTareas:ListaTareas,titulo:string){
        return listaTareas.lista.filter(tarea => 
            tarea.titulo.toLowerCase().includes(titulo.toLowerCase()),
        )
    }    
    function buscarID(listaTareas: ListaTareas, id:number){
        return listaTareas.lista.filter(tarea =>
            tarea.id === id
        )
    }
    //Estado
    function menuEstado(listaTareas:ListaTareas,opEstado:string){
        switch(opEstado){
            case "1":
                return buscarEstado(listaTareas, "Pendiente");
            case "2":
                return buscarEstado(listaTareas, "En Curso");
            case "3":
                return buscarEstado(listaTareas, "Terminada");
            case "4":
                return buscarEstado(listaTareas, "Cancelada");
        }

    }
    function buscarEstado(listaTareas: ListaTareas, estado:string){
        return listaTareas.lista.filter(tarea =>
            tarea.estado === estado
        )
    }
    //Dificultad
    function menuDificultad(listaTareas:ListaTareas,opDificultad:string){

        switch(opDificultad){
            case "1":
                return buscarDificultad(listaTareas, "Facil")
            case "2":
                return buscarDificultad(listaTareas, "Medio")
            case "3":
                return buscarDificultad(listaTareas, "dificil")
            default:
                return
        }
    }
    function buscarDificultad(listaTareas: ListaTareas, dificultad:string){
        return listaTareas.lista.filter(tarea =>
            tarea.dificultad === dificultad
        )
    }