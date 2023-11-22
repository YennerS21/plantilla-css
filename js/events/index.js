const doc = document;
let icono="";

doc.addEventListener('DOMContentLoaded', (ev)=>{
	icono = doc.getElementById("icono");
	
	menuDesplegable(icono);
});


//
function menuDesplegable(icono) {
	icono.addEventListener('click',(ev) => {
	let listaMenu = doc.getElementById("lista_menu");
	let estilos = window.getComputedStyle(listaMenu);
		console.log(estilos.display);
		if (estilos.display === "none") {
			listaMenu.classList.remove('menu');
			listaMenu.classList.add('menu-desplegable');
		}else{
			listaMenu.classList.remove('menu-desplegable');
			listaMenu.classList.add('menu');
		}
	});
}