import { input, close } from "../../lib/nodeImperativo.js";
export{listaTareas};

class listaTareas{
    lista=[];
    constructor(id,titulo,descripcion,dificultad,estado,creacion,edicion,vencimiento,vencimientoString){
        this.id=id;
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.dificultad=dificultad;
        this.estado=estado;
        this.creacion=creacion;
        this.edicion=edicion;
        this.vencimiento=vencimiento;
        this.vencimientoString=vencimientoString

    };
    //Crear Tarea
    async crearTarea(){
        //Titulo
            let titulo;
            do{
                titulo=await input("Ingrese el titulo de la tarea\n");
            }while(!titulo || titulo.trim() === "");
            this.titulo=titulo;
        //ID
            let id= this.lista.length + 1;
            this.id=id.toString();
        //Descripcion
            let descripcion=await input("Ingrese una descripcion\n");
            this.descripcion=descripcion;
        //Dificultad
            let dificultadOp
                console.log("Eliga una dificultad para la tarea (por defecto Facil)");
                console.log("[1] Facil");
                console.log("[2] Medio");
                console.log("[3] Dificil");
                dificultadOp = await input("...\n")
                switch(dificultadOp){
                    case"1":
                        this.dificultad="Facil";
                        break;
                    case"2":
                        this.dificultad="Medio";
                        break;
                    case"3":
                        this.dificultad="Dificil";
                        break;
                    default:
                        this.dificultad="Facil";
                        break;
                }
        //Estado
            let estadoOp;
            console.log("Eliga un estado para la tarea (por defecto En Curso)");
            console.log("[1] En Curso");
            console.log("[2] Pendiente");
            console.log("[3] Terminada");
            estadoOp= await input("...\n")
            switch(estadoOp){
                case"1":
                    this.estado="En Curso";
                    break;
                case"2":
                    this.estado="Pendiente";
                    break;
                case"3":
                    this.estado="Terminada";
                    break;
                default:
                    this.estado="En Curso"
                    break
            }
        //Fecha de Creacion
            this.creacion=new Date().toISOString().split('.')[0].replace('T',' ');
        //Fecha de Vencimiento
            let fechaLimite;
            console.log("Ingrese la fecha de vencimiento de la tarea en formato yyyy-mm-dd");
            console.log("Se asignara una fecha de vencimiento por defecto de 1 año a partir de la fecha actual en caso de no ingresar ninguna fecha o de formato incorrecto");
            fechaLimite= await input("...\n");
            if(Date.parse(fechaLimite)){
                this.vencimiento=new Date(fechaLimite);
                this.vencimientoString=this.vencimiento.toISOString().split('.')[0].replace('T',' ');
            }else{
            fechaLimite=new Date(new Date().setFullYear(new Date().getFullYear() + 1));
            this.vencimientoString= fechaLimite.toISOString().split('.')[0].replace('T',' ');
            this.vencimiento=fechaLimite;}

        //Edicion
            this.edicion=null;
        // Guardar una copia plana de la tarea en la lista para evitar referencias circulares
        this.lista.push({
            id: this.id,
            titulo: this.titulo,
            descripcion: this.descripcion,
            dificultad: this.dificultad,
            estado: this.estado,
            creacion: this.creacion,
            edicion: this.edicion,
            vencimiento: this.vencimiento,
            vencimientoString: this.vencimientoString
        });
        console.log("✅✅Tarea creada con exito✅✅");
    };
    //Ver Tarea
    async verTarea(){
        let opcionMostrarmenu; 
                    do{     
                        console.log("[1] Ver todas las tareas");
                        console.log("[2] Ver por estado");
                        console.log("[3] Ver por dificultad");
                        console.log("[4] Ver tareas caducadas");
                        console.log("[0] volver");
                        opcionMostrarmenu= await input("...");
                    }while(!opcionMostrarmenu| !["1","2","3","4","0"].includes(opcionMostrarmenu.trim("")))
                    switch(opcionMostrarmenu){
                            case"1":
                                this.lista.forEach(tarea => {
                                    if(this.lista.length===0){
                                        console.log("❌❌ No se a creado ninguna tarea ❌❌");
                                    }
                                    console.log(tarea);
                                });
                                break;
                            case"2":
                                this.verPorEstado();
                                break;
                            case"3":
                                this.verPorDificultad();
                                break;
                            case"4":
                                this.verPorvencim();
                                break;
                            case"0":
                                return;
                        }

    };
    async verPorDificultad() {
                let busacarDificultad
                do{
                    console.log("[1] Facil");
                    console.log("[2] Medio");
                    console.log("[3] Dificil");
                    console.log("[0] Volver");
                    busacarDificultad= await input("...")
                }while(!busacarDificultad||!["1","2","3","0"].includes(busacarDificultad.trim()))
                switch(busacarDificultad){
                    case "1":
                        lista.forEach(tarea => {
                            if (tarea.dificultad === "Facil")
                                console.log(tarea);});
                        break;
                        case"2":
                        this.lista.forEach(tarea => {
                            if (tarea.dificultad === "Medio")
                                console.log(tarea);
                        });
                        break
                        case"3":
                        this.lista.forEach(tarea => {
                            if (tarea.dificultad === "Dificil")
                                console.log(tarea);
                        });
                        break;
                    case"0":
                        return;
                }   
    };
    async verPorEstado(){
                    let buscarEstado;
                    do{
                        console.log("[1] En Curso");
                        console.log("[2] Pendiente");
                        console.log("[3] Terminada");
                        console.log("[4] Cancelada");
                        console.log("[0] Volver");
                        buscarEstado= await input("...");
                    }while(!buscarEstado||!["1","2","3","4","0"].includes(buscarEstado.trim()))
                    switch(buscarEstado){
                        case"1":
                                this.lista.forEach(tarea => {
                                    if(tarea.estado==="En Curso"){
                                        console.log(tarea);
                                    }
                                })
                            break;
                        case"2":
                                this.lista.forEach(tarea => {
                                    if(tarea.estado==="Pendiente"){
                                        console.log(tarea);
                                    }
                                })
                            break;
                        case"3":
                                this.lista.forEach(tarea => {
                                    if(tarea==="Terminada"){
                                        console.log(tarea);
                                    }
                                })
                            break;
                        case"4":
                                this.lista.forEach(tarea => {
                                    if(tarea.estado==="Cancelada"){
                                        console.log(tarea);
                                    }
                                })
                            break;
                        case"0":
                            return;
                    }
    };
    async verPorvencim() {
                this.lista.forEach(tarea => {
                    let hoy = new Date();
                    if (tarea.vencimiento < hoy) {
                        console.log(tarea);
                    }
                });
    };
     //Buscar Tarea
    async buscarTarea(){
            let menuBuscar;
            do{
                console.log("Elija una opcion de busqueda");
                console.log("[1] Por Titulo");
                console.log("[2] Por ID");
                console.log("[0] Volver");
                menuBuscar= await input("...");
            }while(!menuBuscar||!["1","2","0"].includes(menuBuscar.trim()))
            switch(menuBuscar){
                case"1":
                        buscarPorTitulo();
                    break;
                case"2":
                        buscarPorID();
                    break;
                case"0":
                    return;
            }
    };
    async buscarPorTitulo(){
            let buscarTitulo;
            console.log("Ingrese el titulo a buscar");
            buscarTitulo= await input("...\n");
            this.lista.forEach(tarea => {
                if(tarea.titulo.toLowerCase().includes(buscarTitulo.toLowerCase())){
                    console.log(tarea);
                    
                }else{
                    console.log("❌❌ No se encontro ninguna tarea que coincida ❌❌");
                };
            })
    };
    async buscarPorID(){
            let buscarID;
            console.log("Ingrese el ID a buscar");
            buscarID= await input("...\n");
            this.lista.forEach(tareas => {
                if(tareas.id===Number(buscarID)){
                    console.log(tareas);
                }else{
                    console.log("❌❌ No se encontro ninguna tarea que coincida ❌❌");
                }
            })
    };
    //Editar Tarea
     async editarTarea(){
            console.log("Para Editar una tarea ingrese el ID de la misma\n");
            let editarID;
            editarID= await input("...\n");
            for(let tarea of this.lista){
                if(tarea.id!=Number(editarID)){
                    console.log("❌❌ No se encontro ninguna tarea que coincida ❌❌");
                }else{
                    console.log("✅✅Tarea encontrada, ingrese los nuevos datos✅✅\n");
                    //Titulo
                        console.log("El titulo actual es: "+tarea.titulo+"\nIngrese el nuevo titulo");
                        console.log("(Para mantener el titulo actual, presione ENTER)");
                        let nuevoTitulo=await input("...\n");
                        if(nuevoTitulo.trim()!==""){
                            tarea.titulo=nuevoTitulo;
                        }
                    //Descripcion
                        console.log("La descripcion actual es: "+tarea.descripcion+"\nIngrese la nueva descripcion");
                        console.log("(Para mantener la descripcion actual, presione ENTER)");
                        let nuevaDescripcion=await input("...\n");
                        if(nuevaDescripcion.trim()!==""){
                            tarea.descripcion=nuevaDescripcion;
                        }
                    //Dificultad
                        console.log("La dificultad actual es: "+tarea.dificultad+"\nEliga una nueva dificultad para la tarea (por defecto se mantiene la actual)");
                        console.log("[1] Facil");
                        console.log("[2] Medio");
                        console.log("[3] Dificil");
                        let nuevaDificultad = await input("...\n");
                        switch(nuevaDificultad){
                            case "1":
                                tarea.dificultad="Facil";
                                break;
                            case "2":
                                tarea.dificultad="Medio";
                                break;
                            case "3":
                                tarea.dificultad="Dificil";
                                break;
                            default:
                                break;
                        }
                    //Estado
                        console.log("El estado actual es: "+tarea.estado+"\nEliga un nuevo estado para la tarea (por defecto se mantiene el actual)");
                        console.log("[1] En Curso");
                        console.log("[2] Pendiente");
                        console.log("[3] Terminada");
                        let nuevoEstado = await input("...\n");   
                        switch(nuevoEstado){
                            case"1":
                                tarea.estado="En Curso";
                                break;
                            case"2":
                                tarea.estado="Pendiente";
                                break;
                            case"3":
                                tarea.estado="Terminada";
                                break;
                            default:
                            break;
                        }
                    tarea.edicion=new Date().toISOString().split('.')[0].replace('T',' ');
                    console.log("✅✅Tarea editada con exito✅✅");
                }
            } 
    };
}