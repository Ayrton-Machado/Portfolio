import { criarBanner, btnBanner } from "../../controller/js/projetos/criarBanner.js";
import { criarCard } from "../../controller/js/projetos/criarCard.js";
import { mostraTelaCad, escondeTelaCad } from "../../controller/js/projetos/telaCad.js";
import { cadastrarCartao } from "../../services/projetos/cartoes_services.js";

window.escondeTelaCad = escondeTelaCad;
window.mostraTelaCad = mostraTelaCad;
window.cadastrarCartao = cadastrarCartao;

document.addEventListener('DOMContentLoaded', () => {
    criarBanner();
    btnBanner();
    criarCard();
});