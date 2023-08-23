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
        $query_valor = "SELECT SUM(quantidade * valor) AS valor_estoque FROM produtos";
        $result_valor = $conn->prepare($query_valor);
        $result_valor->execute();

        $row_valor = $result_valor->fetch(PDO::FETCH_ASSOC);

        echo "Valor do estoque (venda): R$ " . $row_valor['valor_estoque'] . "<br><br>";
        echo "Valor do estoque (venda): R$ " . number_format($row_valor['valor_estoque'], 2, ",", ".") . "<br><br>";
        echo "Valor do estoque (venda): " . number_format($row_valor['valor_estoque'], 2, ",", ".") . "<br><br>";
    ?>
</body>
</html>