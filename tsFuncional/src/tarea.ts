

export class Tarea {
  
    constructor(  public id: number,
        public titulo: string,
        public descripcion: string,
        public estado: string,
        public creacion: Date,
        public edicion: Date | null,
        public vencimiento: Date,
        public dificultad: string
    ){}

}