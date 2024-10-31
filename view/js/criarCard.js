import { atualizarCartao, buscar_info_cartoes, excluirCartao } from "../../services/projetos/cartoes_services.js";
import { mostraTelaCad } from "../../controller/js/projetos/telaCad.js";
import { mostraTelaEdit } from "../../controller/js/projetos/telaEdit.js";

export async function criarCard() {
    const data = await buscar_info_cartoes();
    let sectionCards = document.getElementById('cartoes');
    sectionCards.innerHTML = "";
    sectionCards.style.width = `${data.length+1}00vw`

    let cardAdd = document.createElement('button')
    cardAdd.className = 'card'
    cardAdd.textContent = '+'
    cardAdd.addEventListener('click', () => {
        mostraTelaCad();
    })
    
    sectionCards.appendChild(cardAdd);

    for (let i=0; i < data.length; i++){
        let card = document.createElement('div');
        card.className = 'card';
        let h1 = document.createElement('h1');
        h1.textContent = data[i].title;
        let icon = document.createElement('i');
        icon.className = `${data[i].icon_class}`;
        let h3 = document.createElement('h3');
        h3.textContent = data[i].desc;
        let btn_del = document.createElement('button')
        btn_del.textContent = "EXCLUIR"
        btn_del.className = 'func_btns'
        btn_del.addEventListener('click', () => {
            excluirCartao(data[i].id);
            console.log(data[i].id)
        })
        
        let btn_edit = document.createElement('button')
        btn_edit.textContent = "EDIT"
        btn_edit.className = 'func_btns'
        btn_edit.addEventListener('click', () => {
            mostraTelaEdit(data[i].id);
            console.log(data[i].id)
        })


        card.appendChild(btn_edit);
        card.appendChild(btn_del);
        card.appendChild(h1);
        card.appendChild(icon);
        card.appendChild(h3);

        sectionCards.appendChild(card);
    }
}