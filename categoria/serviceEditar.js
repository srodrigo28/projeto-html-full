import { categoriaService  } from './controller.js'

const pegaUrl = new URL(window.location)

const id = pegaUrl.searchParams.get('id')
// console.log(id)

const inputNome = document.querySelector('[data-nome]')
const inputDescricao = document.querySelector('[data-descricao]')

categoriaService.detalheCategoria(id)
.then( dados => {
    inputNome.value = dados.nome
    inputDescricao.value = dados.descricao
    // console.log(inputNome.value)
    // console.log(inputDescricao.value)
})

const formulario = document.querySelector('[data-form]')
console.log(formulario)

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    categoriaService.atualizaCategoria(id, inputNome, inputDescricao)

    .then( () => {
        window.location.href = "./index.html";
    })
})