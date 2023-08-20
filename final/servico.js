import { categoriaService } from "./controller.js";

const tabela = document.querySelector('[data-tabela]')
// const formCategoria = document.querySelector('[data-form')

addEventListener('submit', (evento) => {
    const nome = evento.target.querySelector('[data-nome]').value
    const descricao = evento.target.querySelector('[data-descricao]').value

    if(nome == ""){
        alert('Preencher o campo Nome')
    }else if( descricao == ""){
        alert('Preencher o campo Descrição')
    }else{
        categoriaService.inserirCategoria(nome, descricao)
    }
    

    // window.location.href = './categoria.html'
})

const criaNovaLinha = (id, nome, descricao) => {
    const linhaNovaCliente = document.createElement('tr')
    const conteudo = `
            <td class="td text-center" data-td> ${id} </td>
            <td class="td" data-td> ${nome}      </td>
            <td class="td" data-td> ${descricao} </td>
            <td class="text-center">
                <a href="#"> 
                    <button class="btn btn-primary" onclick='editar()'>
                        Editar 
                    </button>
                </a>
                <a href="#"> 
                    <button class="btn btn-danger" id="excluir" >
                        Excluir
                    </button>
                </a>
            </td>
        `
    linhaNovaCliente.innerHTML = conteudo;
    linhaNovaCliente.dataset.id = id;
    return linhaNovaCliente;
}

categoriaService.listaCategoria()
.then( data => {
    if(data < 1 ){
        alert('Sem registros ...')
    }else{
        data.forEach(element => {
            tabela.appendChild(criaNovaLinha(
                element.id, 
                element.nome, 
                element.descricao
            ))
        })
    }
})

tabela.addEventListener('click', (evento) => {
    let ehExcluir = evento.target.id == 'excluir'
    if(ehExcluir){
        const linhaCategoria = evento.target.closest('[data-id]')
        let id = linhaCategoria.dataset.id
        categoriaService.removerCategoria(id)
    }else{
        alert('Não consegui excluir :( ')
    }
})