//Fichero javascript asignado tanto al inicio de sesion como al registro de nuevo usuario
//En este fichero esta el codigo JavaScript que enlaza la aplicacion con el sistema Authentication de Firebase
//Nos permitira gestionar las credenciales de acceso a nuestra app.

//Modulo para enlazar nuestra aplicacion con Firebase
var firebase = require("firebase");

// Codigo de Google para inicializar Firebase y vincularlo a nuestro proyecto.
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyDZIQOVgiHPhodbh5tY0fuy09iPg_vfWxw",
  authDomain: "technoage-53895.firebaseapp.com",
  databaseURL: "https://technoage-53895.firebaseio.com",
  storageBucket: "technoage-53895.appspot.com",
};
firebase.initializeApp(config);


//Funcion encargada de registrar los datos de un nuevo cliente en Firebase
function registerNewClient(client) {
	var clientsRef = firebase.database().ref().child('clients');
	clientsRef.push(client);
	return alert('Usuario registrado correctamente en Firebase');
}

