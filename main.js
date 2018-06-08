//Fichero JavaScript a ejecutar cuando el usuario arranque la aplicacion.

const {app, BrowserWindow} = require('electron')
  
  //Funcion encargada de crear la ventana principal de nuestra aplicacion.
  function createWindow () {
    // El objeto BrowserWindow representa la ventana (el marco), de nuestra app.
    win = new BrowserWindow({width: 800, height: 600})
  
    // Cargamos la pagina HTML que queramos cargar al iniciar la aplicacion.
    win.loadFile('src/html/index.html')
  }
  
  //El metodo "app" controla el ciclo de vida de la aplicacion.
  /*En este caso, indicamos que cuando la aplicacion ha terminado su inicializacion y esta lista para funcionar,
    ejecute la funcion "createWindow". */
   app.on('ready', createWindow)