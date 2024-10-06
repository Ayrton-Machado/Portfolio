function typeText(element, text, speed) {
    element.textContent = ""; // Limpa o conteúdo existente
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text[index]; // Adiciona uma letra de cada vez
            index++;
            setTimeout(type, speed); // Chama a função novamente após um pequeno atraso
        }
    }

    type(); // Inicializa a digitação
}

import { data } from "./projetos_db.js";
import { trocarBanner } from './trocarBanner.js';

export function criarBanner() {
    let sectionBanners = document.querySelector('#banners');
    
    for (let i = 0; i <= data.length - 1; i++) {
        let banner = document.createElement('div');
        banner.classList.add('banner');
        
        let banner_title = document.createElement('h1');
        let icon = document.createElement('i');
        let p_link = document.createElement('p');
        let link = document.createElement('a');

        // Adiciona o ícone
        icon.className = `${data[i].icon_class}`;
        icon.style.color = 'rgb(0, 255, 0)';

        // Adiciona o link
        link.href = data[i].link;
        link.target = "_blank";

        // Não aplicamos o efeito de digitação aqui ainda, só criamos os elementos
        banner.appendChild(banner_title);
        banner.appendChild(icon);
        p_link.appendChild(link);
        banner.appendChild(p_link);
        sectionBanners.appendChild(banner);
    }
}

export function btnBanner() {
    let btnsBanners = document.querySelector('#btns_banners');
    const banners = document.querySelectorAll('.banner');
    
    for (let j = 0; j <= data.length - 1; j++) {
        let btn = document.createElement('a');
        btn.innerHTML = data[j].title;
        btn.classList.add('btn_banner');

        // Ao clicar no botão, troca o banner e aplica o efeito de digitação
        btn.addEventListener('click', () => {
            trocarBanner(j);
            
            // Seleciona os elementos do banner atual para aplicar a digitação
            let banner_title = banners[j].querySelector('h1');
            let link = banners[j].querySelector('a');

            // Aplica o efeito de digitação
            typeText(banner_title, data[j].title, 100); // Título com efeito de digitação
            typeText(link, data[j].link, 100); // Link com efeito de digitação
        });

        btnsBanners.appendChild(btn);
    }
}
