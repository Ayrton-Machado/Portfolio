import { criarCard } from "../../controller/js/projetos/criarCard.js";
import { escondeTelaCad } from "../../controller/js/projetos/telaCad.js";

export async function buscar_info_cartoes() {
    try {
        let response = await fetch('http://172.17.16.44:3000/');
        let data = await response.json();
        return data
    } catch (error) {
        console.error('Error', error);
    }
}

export async function excluirCartao(index) {
    try {
        const response = await fetch("http://172.17.16.44:3000/delete", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({card: index})
        });
        criarCard();
    } catch (e) {
        console.log(e);
    }
}

export async function cadastrarCartao() {
    let titulo = document.getElementById('titulo')
    let icon_class = document.getElementById('icon_class')
    let link = document.getElementById('link')
    let desc = document.getElementById('desc')

    try {
        const response = await fetch('http://172.17.16.44:3000/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                titulo: titulo.value,
                icon_class: icon_class.value,
                link: link.value,
                desc: desc.value
            }
        })
        escondeTelaCad();
    } catch (e) {
        alert(e)
    }
}