const tabela = document.querySelector('[data-tabela]')
const baseUrl = 'http://localhost:3000/categoria'

const criaNovaLinha = (id, nome, descricao) => {
    const linhaNovaCliente = document.createElement('tr')
    const conteudo = `
            <td class="td text-center" data-td> ${id}      </td>
            <td class="td" data-td> ${nome}      </td>
            <td class="td" data-td> ${descricao} </td>
            <td class="text-center">
                <a href="#"> 
                    <button class="btn btn-warning" onclick='editar()'>
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

function editar(){
    alert('editando ...')
}

function ecluir(){
    alert('excluíndo')
}

const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest()
        http.open('GET', baseUrl)

        http.onload = () => {
            if(http.status >= 400){
                reject(JSON.parse(http.response))
            }else{
                resolve(JSON.parse(http.response))
            }
        }     
        http.send()
    })
    // console.log(promise)
    return promise
}

listaClientes()
.then( data => {
    data.forEach(element => {
        tabela.appendChild(criaNovaLinha(
            element.id, element.nome, element.descricao
        ))
    });
})
