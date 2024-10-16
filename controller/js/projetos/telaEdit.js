import { atualizarCartao } from "../../../services/projetos/cartoes_services.js"

let id;
let telaEdit = document.querySelector('#telaEdit')

export function escondeTelaEdit() {
    telaEdit.style.left = "-100vw" 
}

export function mostraTelaEdit(i) {
    id = i;
    telaEdit.style.left = "0vw"
}

export function recolheDadosEdit() {
    let title = document.getElementById('titulo_edit')
    let icon_class = document.getElementById('icon_class_edit')
    let desc = document.getElementById('desc_edit')

    atualizarCartao(id, title.value, icon_class.value, desc.value)
    escondeTelaEdit();

    title.value = ''
    icon_class.value = ''
    desc.value = ''
}