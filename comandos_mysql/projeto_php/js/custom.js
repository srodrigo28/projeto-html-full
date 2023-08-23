// alert('teste')

const tbody = document.querySelector(".listar-usuarios");

const listarProdutos = async (pagina) => {
    const dados = await fetch("./list.php?pagina=" + pagina);
    const resposta = await dados.text();

    tbody.innerHTML = resposta;

}

listarProdutos(1);