export function menuDesplegable(icono) {
	icono.addEventListener('click',(ev) => {
	let listaMenu = document.getElementById("lista_menu");
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