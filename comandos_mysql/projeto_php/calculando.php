<?php

require("conexao.php");

// echo "Hello server PHP";

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="#" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto Calcuando PHP PDO</title>
</head>
<body>
    <?php
        $query_valor1 = "SELECT SUM(quantidade * valor_venda) AS valor_venda FROM produtos";
        $result_valor1 = $conn->prepare($query_valor1);
        $result_valor1->execute();

        $query_valor2 = "SELECT SUM(quantidade * valor_compra) AS valor_compra FROM produtos";
        $result_valor2 = $conn->prepare($query_valor2);
        $result_valor2->execute();

        $row_valor1 = $result_valor1->fetch(PDO::FETCH_ASSOC);
        $row_valor2 = $result_valor2->fetch(PDO::FETCH_ASSOC);

        //$total = $row_valor1 - $row_valor2;

        $venda = number_format($row_valor1['valor_venda'], 2, ",", ".");
        $compra = number_format($row_valor2['valor_compra'], 2, ",", ".");

        echo "Valor do estoque (compra): R$ " . $compra . "<br><br>";
        echo "Valor do estoque (venda): R$ " . $venda  . "<br><br>";

        $lucro = $row_valor1['valor_venda'] - $row_valor2['valor_compra'];

        $lucro_format = number_format($lucro, 2, ",", ".");

        echo "Lucro: R$  $lucro_format" ;
    ?>
</body>
</html>