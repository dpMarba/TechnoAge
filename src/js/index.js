//Fichero JavaScript asignado a index.html

//Funcion que creara la ventana emergente con la que un usuario registrado pueda acceder al sistema.
function openLoginForm() {
	popupWindow = window.open('../html/loginform.html','popUpWindow','height=50,width=100,left=100,top=100,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=yes');
}

//Funcion que creara la ventana emergente con la que un nuevo usuario pueda registrarse en el sistema.
function openRegistrationForm() {
	popupWindow = window.open('../html/registrationform.html','popUpWindow','height=500,width=500,left=100,top=100,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=yes');
}

