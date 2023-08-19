<?php
    include('conexion.php');
    $sql = "SELECT * FROM codigos";

    $consulta = $conexion->query($sql);
    $codigos = $consulta->fetchAll(PDO::FETCH_OBJ);
    $respuesta = array();
    foreach($codigos as $cod){
        $c["codigo"] = $cod->codigo;
        $c["puntuacion"] = $cod->puntuacion;
        $c["votos"] = $cod->votos;
        array_push($respuesta, $c);
    }
    echo json_encode($respuesta);
?>