export {};
// Importar las utilidades desde el módulo ESM
// @ts-ignore
import { input, close } from "../../lib/nodeImperativo.js"
import{ menu } from "./menu";


function main() {
 menu();
}

// Ejecutar el programa
main();