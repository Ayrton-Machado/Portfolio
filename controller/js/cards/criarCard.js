export function criarCard() {
    let sectionCards = document.getElementById('cartoes')
    for (let i=0; i < 12; i++){

        let card = document.createElement('div');
        card.className = 'card';
        let h1 = document.createElement('h1');
        h1.textContent = 'NOME';
        let h3 = document.createElement('h3');
        h3.textContent = 'R$88.00';
        let p = document.createElement('p');
        p.textContent = 'sobre..';
        
        card.appendChild(h1);
        card.appendChild(h3);
        card.appendChild(p);

        sectionCards.appendChild(card);
    }    
}