import { menuDesplegable } from "../functions/menu.js";

const doc = document;
let icono="";

doc.addEventListener('DOMContentLoaded', (ev)=>{
	icono = doc.getElementById("icono");
	menuDesplegable(icono);
});
