


const formularioUnion = document.querySelector(".formulario-union"),
	  botonFormularioUnion = document.querySelector(".formulario-union .boton"),
	  inputNombre = document.querySelector(".formulario-union .nombre"),
	  inputEmail = document.querySelector(".formulario-union .email"),
	  textoSubmit = document.querySelector(".formulario .texto-submit ");

	 

formularioUnion.addEventListener("submit",function(e){


	e.preventDefault();

	console.log("HELLO HELLOE");
	botonFormularioUnion.innerHTML="ENVIANDO...";

	setTimeout(()=>{

		botonFormularioUnion.innerHTML="ENVIAR";
		inputNombre.value="";
		inputEmail.value="";
		textoSubmit.classList.add("mostrar-texto-submit");

		setTimeout(()=>{

			textoSubmit.classList.remove("mostrar-texto-submit");

		},1000);


		
	},1500);




})
