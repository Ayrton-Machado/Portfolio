import { criarBanner, btnBanner } from "../../controller/js/projetos/criarBanner.js";
import { criarCard } from "../../controller/js/projetos/criarCard.js";
import { mostraTelaCad, escondeTelaCad } from "../../controller/js/projetos/telaCad.js";
import { cadastrarCartao } from "../../services/projetos/cartoes_services.js";
import { escondeTelaEdit, recolheDadosEdit } from "./../../controller/js/projetos/telaEdit.js";

window.escondeTelaCad = escondeTelaCad;
window.escondeTelaEdit = escondeTelaEdit;
window.mostraTelaCad = mostraTelaCad;
window.cadastrarCartao = cadastrarCartao;
window.recolheDadosEdit = recolheDadosEdit;

document.addEventListener('DOMContentLoaded', () => {
    criarBanner();
    btnBanner();
    criarCard();
});