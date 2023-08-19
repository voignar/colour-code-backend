<?php
$usuario = $_ENV["usuario"];
$pass = $_ENV["pass"];
$host = $_ENV["host"];
$bd = $_ENV["db"];
$puerto = $_ENV["puerto"];

try {
    $conexion = new PDO("pgsql:host=$host;port=$puerto;dbname=$bd", $usuario, $pass);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo "Ocurrió un error con la base de datos: " . $e->getMessage();
}