// cargar la aplicacion de electron
const app= require('electron').app;
//crear ventanas del sistema operativo
const BrowserWindow=require('electron').BrowserWindow;
//Ruta del sistema de archivos del S.O.
const path=require('path');
//ruta de carga de aplicaciones web
const url=require('url');
//otra forma de declaras una cosntante
//pantalla principal
let PantallaPrincipal;


function muestraPantallaPrincipal() {
	//creamos pantalla vacia
	PantallaPrincipal=new BrowserWindow({width:380,height:420});
	//cargamos en la pantalla elc ontenido de nuestra pagina
	PantallaPrincipal.loadURL(url.format({
		pathname:path.join(__dirname,'index.html'),
		protocol:'file',
		slashes:true

	}));
	PantallaPrincipal.show();
}
app.on('ready', muestraPantallaPrincipal);