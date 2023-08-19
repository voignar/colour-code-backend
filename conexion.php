<?php
$usuario = "fl0user";
$pass = "u7PBQOobeh0L";
$host = "ep-purple-glade-95536331.eu-central-1.aws.neon.tech";
$bd = "colourcode";

$conexion = pg_connect( "user=".$usuario." ".
                                "password=".$pass." ".
                                "host=".$host." ".
                                "dbname=".$bd
                               ) or die( "Error al conectar: ".pg_last_error() );
?>