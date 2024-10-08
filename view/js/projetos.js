import { criarBanner, btnBanner } from "../../controller/js/projetos/criarBanner.js";
import { criarCard } from "../../controller/js/projetos/criarCard.js";

document.addEventListener('DOMContentLoaded', () => {
    criarBanner();
    btnBanner();
    criarCard();
});