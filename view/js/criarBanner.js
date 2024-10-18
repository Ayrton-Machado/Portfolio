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

import { buscar_info_cartoes } from '../../services/projetos/cartoes_services.js';
import { trocarBanner, trocarCard } from './trocarBanner.js';



export async function criarBanner() {
    const response = await buscar_info_cartoes();
    let sectionBanners = await document.querySelector('#banners');
    sectionBanners.innerHTML = ''

    sectionBanners.style.width = `${response.length}00vw`
    for (let i = 0; i <= response.length - 1; i++) {
        let banner = document.createElement('div');
        banner.classList.add('banner');
        
        let banner_title = document.createElement('h1');
        let icon = document.createElement('i');
        let p_link = document.createElement('p');
        let link = document.createElement('a');

        // Adiciona o ícone
        icon.className = `${response[i].icon_class}`;
        icon.style.color = 'rgb(0, 255, 0)';

        // Adiciona o link
        link.href = response[i].link;
        link.target = "_blank";

        // Não aplicamos o efeito de digitação aqui ainda, só criamos os elementos
        banner.appendChild(banner_title);
        banner.appendChild(icon);
        p_link.appendChild(link);
        banner.appendChild(p_link);
        sectionBanners.appendChild(banner);
    }
}

export async function btnBanner() {
    const response = await buscar_info_cartoes();
    let btnsBanners = await document.querySelector('#btns_banners');
    const banners = document.querySelectorAll('.banner');
    btnsBanners.innerHTML = ''
    banners.innerHTML = ''

    let btn_add = document.createElement('button')
    btn_add.className = 'btn_banner'
    btn_add.textContent = '+'
    btn_add.addEventListener('click', ()=>{
        trocarCard(0);
    })
    btnsBanners.appendChild(btn_add)
    
    for (let j = 0; j <= response.length; j++) {
        let btn = document.createElement('a');
        btn.innerHTML = response[j].title;
        btn.classList.add('btn_banner');

        // Ao clicar no botão, troca o banner e aplica o efeito de digitação
        btn.addEventListener('click', () => {
            trocarBanner(j);
            trocarCard(j+1);
            
            // Seleciona os elementos do banner atual para aplicar a digitação
            let banner_title = banners[j].querySelector('h1');
            let link = banners[j].querySelector('a');

            // Aplica o efeito de digitação
            typeText(banner_title, response[j].title, 80); // Título com efeito de digitação
            typeText(link, response[j].link, 30); // Link com efeito de digitação
        });

        btnsBanners.appendChild(btn);
    }
}
