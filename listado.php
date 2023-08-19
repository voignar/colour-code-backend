<?php
    include('conexion.php');
    $sql = "SELECT * FROM codigos";

    $rs = pg_query($conexion, $sql );
    $respuesta = array();
    $cont = 0;
    while( $obj = pg_fetch_object($rs) ){
        $respuesta[$cont]["codigo"] = $obj->codigo;
        $respuesta[$cont]["puntuacion"] = $obj->puntuacion;
        $respuesta[$cont]["votos"] = $obj->votos;
    }
    echo json_encode($respuesta);
?>