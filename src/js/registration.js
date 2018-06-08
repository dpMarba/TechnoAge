//Fichero JavaScript asignado a registrationform.html
//En este fichero se encuentran las funciones pensadas para validar nuestro formulario de registro personalizado

//Variables
var value = null;
var regex = null;
var labels = document.getElementsByTagName("label");

//Los datos del nuevo usuario a crear
var client = {
	name: null,
	surname: null,
	mail: null,
	password: null,
	address: null,
	city: null,
	phone: null
}
//Funciones que van indicando al usuario si el formulario esta rellenado correctamente.
//Cada funcion comprueba su input correspondiente contra una expresion regular personalizada (o la opcion seleccionada de una lista desplegable).
//Segun el resultado de estas funciones, que se ejecuta cada vez que el usuario deja de pulsar una tecla en el campo rellenable correspondiente, la etiqueta superior se volvera verde o roja.

//Validacion del campo Nombre"
function validateName() {
	value = document.getElementById("nameInput").value;
	regex=/^[a-z A-Z]+$/;

	if (value.match(regex)) {
		labels[0].innerHTML = "Nombre";
		goodLabel(0);
		client.name = value;
	} else {
		labels[0].innerHTML = "El nombre solo puede contener letras";
		badLabel(0);
	}
}

//Validacion del campo "Apellidos"
function validateSurname() {
	value = document.getElementById("surnameInput").value;
	regex=/^[a-z A-Z]+$/;

	if (value.match(regex)) {
		labels[1].innerHTML = "Apellidos";
		goodLabel(1);
		client.surname = value;
	} else {
		labels[1].innerHTML = "Los apellidos solo pueden contener letras";
		badLabel(1);
	}
}

//Validacion del campo "Correo electronico"
function validateMail() {
	value = document.getElementById("emailInput").value;
	//El correo electronico debe respetar el formato tipico de los correos (la @) y terminar en .com
	regex=/^.+@{1}.+(.com)$/;

	if (value.match(regex)) {
		labels[2].innerHTML = "Correo electronico";
		goodLabel(2);
		client.mail = value;
	} else {
		labels[2].innerHTML = "Formato del correo electronico incorrecto";
		badLabel(2);
	}
}

//Validacion del campo "Contraseña"
function validatePassword() {
	value = document.getElementById("passwordInput").value;
	//La contraseña debe tener un minimo de 8 caracteres de cualquier tipo
	regex=/^[^\s]{8,}$/;

	if (value.match(regex)) {
		labels[3].innerHTML = "Contraseña";
		goodLabel(3);
		client.password = value;
	} else {
		labels[3].innerHTML = "La contraseña debe ser minimo de 8 caracteres y no contener espacios";
		badLabel(3);
	}
}

//Validacion del campo "Direccion"
function validateAddress() {
	value = document.getElementById("addressInput").value;
	regex=/^.+$/;

	if (value.match(regex)) {
		labels[4].innerHTML = "Dirección";
		goodLabel(4);
		client.address = value;
	} else {
		labels[4].innerHTML = "Dirección";
		badLabel(4);
	}
}

//Validacion de la lista desplegable "Ciudad"
function validateCity() {
	var cityList = document.getElementById("cityInput");
	value = cityList.options[cityList.selectedIndex].value;

	if (value != "Seleccionar..."){
		labels[5].innerHTML = "Ciudad";
		goodLabel(5);
		client.city = value;
	} else {
		labels[5].innerHTML = "Ciudad";
		badLabel(5);
	}
}

//Validacion del campo "Teléfono"
function validateMobilePhone() {
	value = document.getElementById("mobilePhoneInput").value;
	regex=/^[0-9]{9}$/;

	if (value.match(regex)) {
		labels[6].innerHTML = "Teléfono";
		goodLabel(6);
		client.phone = value;
	} else {
		labels[6].innerHTML = "Teléfono";
		badLabel(6);
	}
}

//Funcion que cambia la etiqueta a roja cuando la validacion es incorrecta.
function badLabel(labelNum) {
	labels[labelNum].style.color = "red";
	labels[labelNum].style.fontWeight = "bold";
}

//Funcion que cambia la etiqueta a verde cuando la validacion es correcta.
function goodLabel(labelNum) {
	labels[labelNum].style.color = "green";
	labels[labelNum].style.fontWeight = "bold";
}

//Funcion que comprueba si el formulario esta listo para enviarse cuando el usuario pulse el boton preparado para registrar los datos.
function validateForm() {
	//Comprobamos todas las etiquetas.
	//Si algun campo tiene un valor erroneo (por lo tanto su etiqueta sera roja), el formulario NO es valido.
	for (var label of labels) {
		if (label.style.color != "green") {
			alert("Formulario invalido");
			return false;
		}
	}

	//Si todas son verdes, la logica del programa alcanzara este punto, con la certeza de que el formulario es valido.
	registerNewClient(client);
}