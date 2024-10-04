let cards = [
    {title: "Projeto Email", desc: "R$ 488,03", img: "https://cdn-icons-png.flaticon.com/512/281/281769.png"},
    {title: "CARTAO 2", desc: "R$ 211,43", img: "https://cdn.pixabay.com/photo/2023/08/17/09/22/planet-8196059_960_720.png"},
    {title: "CARTAO 3", desc: "R$ 283,48", img: "https://cdn.pixabay.com/photo/2022/03/10/13/59/astronaut-7059915_1280.png"},
    {title: "CARTAO 4", desc: "R$ 554,13", img: "https://media.istockphoto.com/id/825319358/pt/vetorial/astronaut.jpg?s=2048x2048&w=is&k=20&c=z2vjmfRNmdUaNmaw1KyfnVvmJd2rosji8omEJpBs2Z4="},
    {title: "CARTAO 5", desc: "R$ 864,55", img: "https://cdn.pixabay.com/photo/2022/03/10/13/58/astronaut-7059910_1280.png"},
    {title: "CARTAO 6", desc: "R$ 372,57", img: "https://cdn.pixabay.com/photo/2021/11/07/00/24/astronaut-6774653_1280.jpg"},
    {title: "CARTAO 7", desc: "R$ 250,26", img: "https://cdn.pixabay.com/photo/2024/07/08/05/41/girl-8880144_1280.png"},
    {title: "CARTAO 8", desc: "R$ 673,08", img: "https://cdn.pixabay.com/photo/2023/10/20/17/19/pumpkin-8329917_1280.jpg"}
  ]

export function criarCard() {
    let sectionCards = document.getElementById('cartoes')
    for (let i=0; i < cards.length; i++){
        let card = document.createElement('div');
        card.className = 'card';
        let h1 = document.createElement('h1');
        h1.textContent = cards[i].title;
        let img = document.createElement('img');
        img.src = cards[i].img
        let h3 = document.createElement('h3');
        h3.textContent = cards[i].desc;

        card.appendChild(h1);
        card.appendChild(img);
        card.appendChild(h3);

        sectionCards.appendChild(card);
    }    
}