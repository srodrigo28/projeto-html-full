<?php
// teste de listagem
// http://localhost:8081/list.php?pagina=3
$limit = 3;
include "conexao.php";

$pagina = filter_input(INPUT_GET, "pagina", FILTER_SANITIZE_NUMBER_INT);

if(!empty($pagina)){    

    $qnt_result_pg = $limit;
    $inicio = ($pagina * $qnt_result_pg) - $qnt_result_pg;

$query_produtos = "SELECT * FROM produtos ORDER BY id ASC LIMIT $inicio, 
$qnt_result_pg";

$result_produtos = $conn->prepare($query_produtos);
$result_produtos->execute();

$dados = " <div class='table-responsive'> 
    <table class='table table-striped'>
        <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>QTD</th>
                <th>Preço Venda</th>
                <th>Ações - $pagina</th>
            </tr>
        </thead>
        <tbody> 
";
while($row_item = $result_produtos->fetch(PDO::FETCH_ASSOC)) {
    extract($row_item);
    $dados .= "<tr>
                <td>$id</td>
                <td>$nome</td>
                <td>$quantidade</td>
                <td>$valor_venda</td>
                <td class='btn btn-primary'>Editar</td>
                <td class='btn btn-danger' $id>Excluir</td>
            </tr>";
}
$dados .= " </tbody>
                </table>
            </div>
        ";

$query_pg = "SELECT COUNT(id) AS num_result FROM produtos";
$result_pg = $conn->prepare($query_pg);
$result_pg->execute();
$row_pg = $result_pg->fetch(PDO::FETCH_ASSOC);

// Quantidade de pagina
$row_pg['num_result'] / $qnt_result_pg;

$quantidade_pg = ceil($row_pg['num_result'] / $qnt_result_pg);
$max_links = 1;

$dados .= ' <nav aria-label="Page navigation example"> <ul class="pagination pagination-sm justify-content-center">';
$dados .=  "<li class='page-item'> <a class='page-link' href='#' onclick='listarProdutos(1)'> Inicil</a> </li>";

for($pag_ant = $pagina - $max_links; $pag_ant <= $pagina - 1; $pag_ant++){
    if($pag_ant >= 1){
        $dados .=   " <li class='page-item'> <a class='page-link' href='#' onclick='listarProdutos($pag_ant)' > $pag_ant </a></li> "; 
    }
}
$dados .=   " <li class='page-item  active'> <a class='page-link' href='#'> $pagina </a></li> "; 

for($pag_dep = $pagina + 1; $pag_dep <= $pagina + $max_links; $pag_dep++){
    if($pag_dep < $quantidade_pg ){
        $dados .=   " <li class='page-item'> <a class='page-link' onclick='listarProdutos($pag_dep)' href='#'> $pag_dep </a></li> "; 
    }
}

$dados .=   " <li class='page-item'> <a class='page-link' href='#' onclick='listarProdutos($quantidade_pg)'> Fim  </a>  </li>";
$dados .=   " </ul> </nav>";

echo $dados;

}else{
    echo "<div class='alert alert-danger text-center'>Erro: Nenhum registro<div> ";
}
