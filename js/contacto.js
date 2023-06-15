
const formularioContacto = document.querySelector(".formulario-contacto"),
	  botonFormularioContacto = document.querySelector(".formulario-contacto .boton"),
	  inputNombre = document.querySelector(".formulario-contacto .nombre"),
	  inputEmail = document.querySelector(".formulario-contacto .email"),
	  inputCelular = document.querySelector(".formulario-contacto .celular"),
	  inputDireccion = document.querySelector(".formulario-contacto .direccion"),
	  inputTema = document.querySelector(".formulario-contacto .tema"),
	  inputMensaje = document.querySelector(".formulario-contacto .mensaje"),
	  textoSubmit = document.querySelector(".form .texto-submit ");


	  // ,
	  // textoSubmit = document.querySelector(".form .texto-submit ");

	  console.log(formularioContacto);
	  console.log(botonFormularioContacto);
	  console.log(inputNombre);
	  console.log(inputEmail);
	  console.log(inputCelular);
	  console.log(inputDireccion);

	   console.log(inputMensaje);
	  console.log(inputTema);

	 

formularioContacto.addEventListener("submit",function(e){


	e.preventDefault();

	console.log("HELLO HELLOE");
	botonFormularioContacto.innerHTML="ENVIANDO...";

	setTimeout(()=>{

		botonFormularioContacto.innerHTML="ENVIAR";
		inputNombre.value="";
		inputEmail.value="";
		inputCelular.value="";
		inputDireccion.value="";
		inputTema.value="";
		inputMensaje.value="";
		textoSubmit.classList.add("mostrar-texto-submit");

		setTimeout(()=>{

			textoSubmit.classList.remove("mostrar-texto-submit");

		},4000);


		
	},1500);




})