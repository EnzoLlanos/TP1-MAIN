import { Tarea } from './tarea';
import { agregarTarea, obtenerTarea } from './metodos';
import { crearTarea } from './metodos';

export class ListaTareas {
    public lista: Tarea[] = [];;

    constructor(NewLista: Tarea[]){
        this.lista = NewLista;
    }

    mostrarTareas(ListaTareas: ListaTareas){
        console.log(obtenerTarea(ListaTareas));
    }

    guardarTarea(nuevaTarea: Tarea){
        nuevaTarea= crearTarea();
        const nuevaLista= this.lista.with(this.lista.length+1, nuevaTarea);
        return new ListaTareas(nuevaLista);
    }

}