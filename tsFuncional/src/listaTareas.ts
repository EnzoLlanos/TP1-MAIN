import { Tarea } from './tarea';

export class ListaTareas {
    public lista: Tarea[] = [];;

    constructor(NewLista: Tarea[]){
        this.lista = NewLista;
    }

}