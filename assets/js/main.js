//funcionalidad del scroll del navBar
var navi = document.getElementById("navegadorId");

window.addEventListener("scroll", function(){
	
	if (document.body.scrollTop > 150) {
    navi.classList.add('shrink');
  } else {
    navi.classList.remove('shrink');
  }
});

//Validacion de inputs
(function validar(){
	//creación del espacio para el mensaje de error para cada input
	var errorNombre = document.createElement("p");
	errorNombre.classList.add("hide");
	document.getElementById("nameX").appendChild(errorNombre);
	errorNombre.innerHTML = "Nombre Invalido";

	var errorEmail = document.createElement("p");
	errorEmail.classList.add("hide");
	document.getElementById("emailX").appendChild(errorEmail);
	errorEmail.innerHTML = "Email Invalido";

	var errorTelefono = document.createElement("p");
	errorTelefono.classList.add("hide");
	document.getElementById("phoneX").appendChild(errorTelefono);
	errorTelefono.innerHTML = "Teléfono Invalido";

	var errorMensaje = document.createElement("p");
	errorMensaje.classList.add("hide");
	document.getElementById("messageX").appendChild(errorMensaje);
	errorMensaje.innerHTML = "Mensaje Invalido";


	document.getElementById("sendId").addEventListener("click", function(val){
		var nombre = document.getElementById("nameId").value;
		var email = document.getElementById("emailId").value;
		var telefono = document.getElementById("phoneId").value;
		var mensaje = document.getElementById("messageId").value;

		val.preventDefault()
			
		if(nombre.charAt(0) != nombre.charAt(0).toUpperCase() || nombre == ""){
			errorNombre.classList.remove("hide");
		}else{
			errorNombre.classList.add("hide");	
		}

		if(email.indexOf("@") == -1){
			errorEmail.classList.remove("hide");
		}else{
			errorEmail.classList.add("hide");
		}

		if(telefono == "" || isNaN(telefono)){
			errorTelefono.classList.remove("hide");
		}else{
			errorTelefono.classList.add("hide");
		}

		if(mensaje.length > 100 || mensaje == ""){
			errorMensaje.classList.remove("hide");
		}else{
			errorMensaje.classList.add("hide");
		}

		 return true;	
	});

})();