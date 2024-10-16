import { criarCard } from "../../view/js/criarCard.js";
import { escondeTelaCad } from "../../controller/js/projetos/telaCad.js";
import { escondeTelaEdit } from "../../controller/js/projetos/telaEdit.js";

export async function buscar_info_cartoes() {
    try {
        let response = await fetch('http://172.17.16.44:3000');
        let data = await response.json();
        data = data.cards
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
    let title = document.getElementById('titulo')
    let icon_class = document.getElementById('icon_class')
    let desc = document.getElementById('desc')

    if (title.lenght > 10) {
        alert(e)
    }

    try {
        const response = await fetch('http://172.17.16.44:3000/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title.value,
                icon_class: icon_class.value,
                desc: desc.value
            })
        })
        escondeTelaCad();
        criarCard();
    } catch (e) {
        alert(e)
    }
}

export async function atualizarCartao(id, title, icon_class, desc) {
    if (title.lenght > 10) {
        alert(e)
    }
    try {
        const response = await fetch(`http://172.17.16.44:3000/cartoes`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },  
            body: JSON.stringify({
                id: id,
                title: title,
                icon_class: icon_class,
                desc: desc
            })
        })
        escondeTelaEdit();
        criarCard();
    } catch(e) {
        alert(e)
    }
}