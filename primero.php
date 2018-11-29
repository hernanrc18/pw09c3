<?php
$servidor="localhost";
$usuario="root";
$password="";
$basedatos="pw09";

$conexion=mysqli_connect($servidor,$usuario,$password,$basedatos);
$sql="select ncontrol,nombre,apelido,edad from alumnos";
$resultado=mysqli_query($conexion,$sql);

$arregloDatos = array();

if (mysqli_num_rows (resultado) > 0 ){
	while($registro=mysqli=cubrid_fetch_array($resultado)) {
		arregloDatos[] = $registro;
		//array_push($arregloDatos, $registro)	}
}

print($arregloDatos);
//si quiero json
print json_encode($arregloDatos);

?>