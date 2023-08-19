const tabela = document.querySelector('[data-tabela]')
const http = new XMLHttpRequest()
const baseUrl = 'http://localhost:3000/categoria'

const criaNovaLinha = (nome, descricao) => {
    const linhaNovaCliente = document.createElement('tr')
    const conteudo = `
            <td class="td" data-td> ${nome}      </td>
            <td class="td" data-td> ${descricao} </td>
            <td>
                <a href="#"> <button onclick='editar()'>Editar </button> </a>
                <a href="#"> <button onclick='ecluir()'>Excluir</button> </a>
            </td>
        `
    linhaNovaCliente.innerHTML = conteudo;
    return linhaNovaCliente
}

function editar(){
    alert('editando ...')
}

function ecluir(){
    alert('excluíndo')
}

http.open('GET', baseUrl)

http.send()

http.onload = () => {
    const data = JSON.parse(http.response)
    console.log(data)

    data.forEach(element => {
        tabela.appendChild(criaNovaLinha(element.nome, element.descricao))
    });
}