// =======================
// Programa principal
// =======================
//Importamos desde la librería
const { input, close } = require("./lib/nodeImperativo");

// Función principal 
let num1:number[]=[];
function suma(num1:number,num2:number){
 let resultado:number;
 resultado=num1+num2;
 return resultado;
}
function resta(num1:number,num2:number){
 let resultado:number;
 resultado=num1-num2;
 return resultado;
}
function multiplicacion(num1:number,num2:number){
 let resultado:number;
 resultado=num1*num2;
 return resultado;
}
function division(num1:number,num2:number){
    
 let resultado:number;
 resultado=num1/num2;
 return resultado;
}
function mostrarMenu(){

    console.log("[+] PARA SUMA");
    console.log("[-] PARA RESTA");
    console.log("[*] PARA MULTIPLICACION");
    console.log("[/] PARA DIVISION");
    console.log("[0] PARA SALIR");
}

async function main(){

  let num1:number;
  let num2:number;
  let operacion:string;
   
  num1=parseFloat(await input("Ingrese el primer número "));
  console.clear()
  num2=parseFloat(await input("ingrese el segundo número "));

  let resultado:number;
  do{
  
  mostrarMenu();
  operacion=await input("Ingerse la operacion a realizar ")
      switch(operacion){
      case "+": 
      console.clear()
        resultado=suma(num1,num2);
        console.log("-------------")
        console.log(num1+" + "+num2+" = "+resultado);
        console.log("-------------")
        break;
      case "-":
        console.clear()
       resultado=resta(num1,num2);
       console.log("-------------")
       console.log(num1+" - "+num2+" = "+resultado);
       console.log("-------------")
        break;
      case "*":
        console.clear()
        resultado=multiplicacion(num1,num2);
        console.log("-------------")
        console.log(num1+" * "+num2+" = "+resultado);
        console.log("-------------")
        break;
      case "/":
        if(num2!==0){
          console.clear()
          resultado=division(num1,num2);
          console.log("-------------")
          console.log(num1+" / "+num2+" = "+resultado);
          console.log("-------------")
        }else{
          console.clear()
          console.log("Error, imposible dividir por 0");
          break;
        }
        break;
      case "0":
        console.clear()
        console.log("Esta Saliendo")
        break;
      default:
        console.log("ERROR OPCION NO VALIDA")
        break;
    }
  }while(operacion!=="0");

  close(); // cerramos cuando ya no se necesita
}


// Ejecutar el programa
main();
