import { ListaTareas } from "./listaTareas";
import {Tarea} from "./tarea";
import { pedirTitulo } from "./menu";    

    export function obtenerTarea(ListaTarea: ListaTareas){
        return ListaTarea.lista.map(t => t);
    }


    export function agregarTarea( newid: number, newtitulo: string, newdescripcion: string, newestado: string, newcreacion: Date, newedicion: Date | null, newvencimiento: Date, newdificultad: string){
        const nuevaTarea = new Tarea( newid, newtitulo, newdescripcion, newestado, newcreacion, newedicion, newvencimiento, newdificultad);
        return nuevaTarea;
    }

    //Crear tarea | pedir datos
    export function crearTarea(){
        let newId:number= id();
        let newTitulo:string= titulo(newId);
        let newDescripcion:string= descripcion();
        let newEstado:string= estado();
        let newCreacion:Date= creacion();
        let newEdicion:Date | null= null;
        let newVencimiento:Date= vencimiento();
        let newDificultad:string= dificultad();

       return agregarTarea( newId, newTitulo, newDescripcion, newEstado, newCreacion, newEdicion, newVencimiento, newDificultad);
    }
//Titulo
    function titulo(id :number){
        
        let titulo:string= verificartitulo(pedirTitulo(), id);
       return titulo; 
    }
    function verificartitulo(titulo:string, id:number){
        let tituloDefault: string="Tarea "+id+1;
        if(titulo.trim()===""){
            return tituloDefault;
        }
        return titulo;
    }
//Id
    function id(){
        let id:number= ListaTareas.length + 1;
        return id;
    }
//Descripcion
    function descripcion(){
        let descripcion:string;
        return descripcion;
    }
//Estado
    function estado(){
        let estado:string;
        return estado;
    }
//Creacion
    function creacion(){
        let creacion:Date;
        return creacion;
    }
//Vencimiento
    function vencimiento(){
        let vencimiento:Date;
        return vencimiento;
    }
//Dificultad
    function dificultad(){
        let dificultad:string;
        return dificultad;
    }