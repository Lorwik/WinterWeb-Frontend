<?php
include 'db.php';

$donde = $_GET["n"];

$db = new DB();

$query = $db->connect()->query('SELECT * FROM ' . $donde);

$resultado = $query->fetchAll(PDO::FETCH_OBJ);

echo json_encode($resultado);
