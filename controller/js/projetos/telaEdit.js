import { atualizarCartao } from "../../../services/projetos/cartoes_services.js"

let telaEdit = document.querySelector('#telaEdit')

export function escondeTelaEdit() {
    telaEdit.style.left = "-100vw" 
}

export function mostraTelaEdit() {
    telaEdit.style.left = "0vw"
}

export function recolheDadosEdit(id) {
    let title = document.getElementById('titulo_edit')
    let icon_class = document.getElementById('icon_class_edit')
    let link = document.getElementById('link_edit')
    let desc = document.getElementById('desc_edit')

    atualizarCartao(id, title, icon_class, link, desc)
    escondeTelaEdit();

    title.value = ''
    icon_class.value = ''
    link.value = ''
    desc.value = ''
}