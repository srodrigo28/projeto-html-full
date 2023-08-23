<?php 

$host = "localhost";
$user = "root";
$pass = "";
$port = 3306;
$dbname = "db_gestao";

try{
    $conn = new PDO("mysql:host=$host;port=$port;dbname=" . $dbname, $user, $pass);
    // echo "sucesso: conexão com banco <hr>" ;
}catch(PDOException $err){
    echo "Error: " . $err->getMessage();
}