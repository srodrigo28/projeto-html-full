const baseUrl = 'http://localhost:3000/categoria'

const listaCategoria = () => {
    return fetch(baseUrl)
    .then(resposta => {
        return resposta.json()
    })
}

const inserirCategoria = (nome, descricao) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            descricao: descricao
        })
    })
    .then( resposta => {
        return resposta.body
    })
}

const removerCategoria = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    })
}

const detalheCategoria = (id) => {
    return fetch(`${baseUrl}/${id}`)
    .then(resposta => {
        return resposta.json()
    })
}

const atualizaCategoria = (id, nome, descricao) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {

        },
        body: JSON.stringify({
            nome: nome,
            descricao: descricao
        })
    })
    .then( resposta => {
        return resposta.json()
    })
}

export const categoriaService = {
    listaCategoria,
    inserirCategoria,
    removerCategoria,
    detalheCategoria,
    atualizaCategoria
}