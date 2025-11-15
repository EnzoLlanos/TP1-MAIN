export class Tarea {
  
    constructor(  public id: number,
        public titulo: string,
        public descripcion: string,
        public estado: string,
        public creacion: string,
        public edicion: Date | null,
        public vencimiento: string,
        public dificultad: string
    ){}

}