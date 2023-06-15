const iconoMenu = document.querySelector(".icono-menu");
const iconoCerrar = document.querySelector(".icono-cerrar");

const navegacion = document.querySelector(".navegacion");
const body = document.querySelector("body");

iconoMenu.addEventListener("click",function(){


	
		navegacion.classList.add("mostrar-header");
		body.classList.add("quitar-scroll");


});


iconoCerrar.addEventListener("click",function(){


	
		navegacion.classList.remove("mostrar-header");
		body.classList.remove("quitar-scroll");


});