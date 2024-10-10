//import { data } from "../../../model/projetos_db.js";
import { data } from "../../../model/projetos_db.js";
import { buscar_info_cartoes } from "./../../../services/projetos/cartoes_services.js";

export function criarCard() {
    buscar_info_cartoes()
    .then(data);
    let sectionCards = document.getElementById('cartoes');
    console.log(data.length)
    for (let i=0; i < data.length; i++){
        let card = document.createElement('div');
        card.className = 'card';
        let h1 = document.createElement('h1');
        h1.textContent = data[i].title;
        let icon = document.createElement('i');
        icon.className = `${data[i].icon_class}`;
        let h3 = document.createElement('h3');
        h3.textContent = data[i].desc;

        card.appendChild(h1);
        card.appendChild(icon);
        card.appendChild(h3);

        sectionCards.appendChild(card);
    }
}