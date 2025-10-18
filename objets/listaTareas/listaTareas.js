import { input, close } from "../../lib/nodeImperativo.js";
export{tareas};
const listaTareas = [];




const tareas={
    //Crear Tarea
        crearTarea: async function(){
            const newTarea={};

            //Titulo 
                do{
                    console.log("Ingrese el titulo de la tarea")
                    newTarea.titulo=await input("...\n");

                } while (!newTarea.titulo || newTarea.titulo.trim() === "");

            //ID Tarea
                newTarea.id=listaTareas.length;
            // Descripcion
                console.log("Ingrese una descripcion para la tarea")
                newTarea.descripcion=await input("...\n");

            //Dificultad
                console.log("Eliga una dificultad para la tarea (por defecto Facil)")
                console.log("[1] Facil");
                console.log("[2] Medio");
                console.log("[3] Dificil");
                let dificultadMenu = await input("...\n");
                switch(dificultadMenu){
                    case "1":
                        newTarea.dificultad="Facil";
                        break;
                    case "2":
                        newTarea.dificultad="Medio";
                        break;
                    case "3":
                        newTarea.dificultad="Dificil";
                        break;
                    default:
                        newTarea.dificultad="Facil";
                        break;
                }

            //Estado
                console.log("eliga un estado para la tarea (por defecto Pendiente)")
                console.log("[1] En Curso");
                console.log("[2] Pendiente");
                console.log("[3] Terminada");
                let estado = await input("...\n");
                switch(estado){
                    case"1":
                        newTarea.estado="En Curso";
                        break;
                    case"2":
                        newTarea.estado="Pendiente";
                        break;
                    case"3":
                        newTarea.estado="Terminada";
                        break;
                    default:
                    newTarea.estado="Pendiente";
                        break;
                }

            //Fecha de Creacion
            let newfecha=new Date();
            newTarea.fecha=newfecha.toISOString().split('T')[0];
                /* newTarea.newfecha=new Date(); */
                
            //Fecha de Vencimientp
                console.log("Ingrese una fecha de vencimiento, por defecto caduca en 1 año formato:YYYY-MM-DD\n");
                let fechaVencim = await input("...\n");
                if(fechaVencim.trim()!==""){
                    newTarea.vencimiento=new Date(fechaVencim);
                }else{
                    newTarea.vencimiento=new Date();
/*                     let newvencimiento = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
                    newTarea.vencimiento = newvencimiento.toISOString().split('T')[0]; */
                }
            //Edicion
                newTarea.edicion=null;


                listaTareas.push(newTarea);
                console.log("📁 Tarea Guardada con Exito");
        },
    //Mostrar Tareas
        verTareas: async function(){
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
                        listaTareas.forEach(tarea => {
                            if(listaTareas.length===0){
                                console.log("❌❌ No se a creado ninguna tarea ❌❌");
                            }
                            console.log(tarea);
                        });
                        break;
                    case"2":
                        verPorEstado();
                        break;
                    case"3":
                        verPorDificultad();
                        break;
                    case"4":
                        verPorvencim();
                        break;
                    case"0":
                        return;
                }
        },
        verPorDificultad: async function () {
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
                        listaTareas.forEach(tarea => {
                            if (tarea.dificultad === "Facil")
                                console.log(tarea);});
                        break;
                    case"2":
                        listaTareas.forEach(tarea => {
                            if (tarea.dificultad === "Medio")
                                console.log(tarea);
                        });
                        break
                    case"3":
                        listaTareas.forEach(tarea => {
                            if (tarea.dificultad === "Dificil")
                                console.log(tarea);
                        });
                        break;
                    case"0":
                        return;
                }   
        },
        verPorEstado: async function (){
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
                            listaTareas.forEach(tarea => {
                                if(tarea.estado==="En Curso"){
                                    console.log(tarea);
                                }
                            })
                        break;
                    case"2":
                            listaTareas.forEach(tarea => {
                                if(tarea.estado==="Pendiente"){
                                    console.log(tarea);
                                }
                            })
                        break;
                    case"3":
                            listaTareas.forEach(tarea => {
                                if(tarea.estado==="Terminada"){
                                    console.log(tarea);
                                }
                            })
                        break;
                    case"4":
                            listaTareas.forEach(tarea => {
                                if(tarea.estado==="Cancelada"){
                                    console.log(tarea);
                                }
                            })
                        break;
                    case"0":
                        return;
                }
        },
        verPorvencim: async function () {
                listaTareas.forEach(tarea => {
                    let hoy = new Date();
                    if (tarea.vencimiento < hoy) {
                        console.log(tarea);
                    }
                });
        },
    //Buscar Tarea
        buscarTarea: async function(){
            let menuBuscar;
            do{
                console.log("Elija una opcion de busqueda");
                console.log("[1] Por Titulo");
                console.log("[2] Por ID");
                console.log("[0] Volver");
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
        },
        buscarPorTitulo: async function(){
            let buscarTitulo;
            console.log("Ingrese el titulo a buscar");
            buscarTitulo= await input("...\n");
            listaTareas.forEach(tareas => {
                if(tareas.titulo.toLowerCase().includes(buscarTitulo.toLowerCase())){
                    console.log(tareas);
                    
                }else{
                    console.log("❌❌ No se encontro ninguna tarea que coincida ❌❌");
                };
            })
        },
        buscarPorID: async function(){
            let buscarID;
            console.log("Ingrese el ID a buscar");
            buscarID= await input("...\n");
            listaTareas.forEach(tareas => {
                if(tareas.id===Number(buscarID)){
                    console.log(tareas);
                }else{
                    console.log("❌❌ No se encontro ninguna tarea que coincida ❌❌");
                }
            })
        },
    //Editar Tarea
        editarTarea: async function(){
            console.log("Para Editar una tarea ingrese el ID de la misma\n");
            let editarID;
            editarID= await input("...\n");
            for(let tarea of listaTareas){
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
                    tarea.edicion=new Date();
                    console.log("✅✅Tarea editada con exito✅✅");
                }
            } 
        }, 
}

