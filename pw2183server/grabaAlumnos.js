

var grabar= function() {
	var nc=document.getElementById('ncontrol').value;
	var no=document.getElementById('nombre').value;
	var ap=document.getElementById('apellido').value;
	var ed=document.getElementById('edad').value;
	const data = new FormData();
	data.append('ncontrol',nc);
	data.append('nombre',no);
	data.append('apellido',ap);
	data.append('edad',ed);
	fetch('http://localhost/pw2183server/agregaAlumnos.php', {
		method: 'post',
		body: data
	})
	.then(datos=>datos.json())
	.then(datos=> {
		if(datos.respuesta == true) {
			alert('Datos Guardados con exito')
		}
		else {
			alert('no se guardaron los datos')
		}
	})

}


var btnGrabar=document.getElementById('btnGrabar');
btnGrabar.addEventListener('click',grabar);
