const baseUrl = 'http://localhost:3000/categoria'

const listaCategoria = () => {
    return fetch(baseUrl)
    .then(resposta => {
        return resposta.json()
    })
}

const inserirCategoria = () => {
    return fetch(baseUrl, {
        method: 'POST'
    })
}

export const categoriaService = {
    listaCategoria
}