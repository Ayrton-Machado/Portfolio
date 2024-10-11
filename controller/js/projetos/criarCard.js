//import { data } from "../../../model/projetos_db.js";
import { buscar_info_cartoes, excluirCartao } from "./../../../services/projetos/cartoes_services.js";
import { mostraTelaCad } from "./telaCad.js";

export async function criarCard() {
    const data = await buscar_info_cartoes();
    let sectionCards = document.getElementById('cartoes');
    sectionCards.innerHTML = "";

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
        let btn = document.createElement('button')
        btn.textContent = "EXCLUIR"
        btn.addEventListener('click', () => {
            excluirCartao(i);
        })

        card.appendChild(btn);
        card.appendChild(h1);
        card.appendChild(icon);
        card.appendChild(h3);

        sectionCards.appendChild(card);
    }
}