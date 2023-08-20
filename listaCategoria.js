import { categoriaService } from "./main.js";

const criaNovaLinha = (id, nome, descricao) => {
    const linhaNovaCliente = document.createElement('tr')
    const conteudo = `
            <td class="td text-center" data-td> ${id}      </td>
            <td class="td" data-td> ${nome}      </td>
            <td class="td" data-td> ${descricao} </td>
            <td class="text-center">
                <a href="#"> 
                    <button class="btn btn-primary" onclick='editar()'>
                        Editar 
                    </button>
                </a>
                <a href="#"> 
                    <button class="btn btn-danger" onclick='ecluir()'>
                        Excluir
                    </button>
                </a>
            </td>
        `
    linhaNovaCliente.innerHTML = conteudo;
    return linhaNovaCliente
}

const tabela = document.querySelector('[data-tabela]')

categoriaService.listaCategoria()
.then( data => {
    data.forEach(element => {
        tabela.appendChild(criaNovaLinha(
            element.id, element.nome, element.descricao
        ))
    })
})

function editar(){
    alert('editando ...')
}

function ecluir(){
    alert('excluíndo')
}

