<?php
$usuario = $_ENV["usuario"];
$pass = $_ENV["pass"];
$host = $_ENV["host"];
$bd = $_ENV["db"];

$conexion = pg_connect( "user=".$usuario." ".
                                "password=".$pass." ".
                                "host=".$host." ".
                                "dbname=".$bd
                               ) or die( "Error al conectar: ".pg_last_error() );
?>