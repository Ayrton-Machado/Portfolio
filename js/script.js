document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#experiencia').addEventListener('click', () => toggleView('experiencia_page'));
    document.querySelector('#projetos').addEventListener('click', () => toggleView('projeto_page'));
    document.querySelector('#formacao').addEventListener('click', () => toggleView('formacao_page'));

});

function toggleView(viewID) {
    const views = ['inicio', 'projeto_page', 'formacao_page', 'experiencia_page'];

    views.forEach(view => document.querySelector(`#${view}`).classList.add('hidden'));
    
    document.querySelector(`#${viewID}`).classList.remove('hidden');
}

/*
function load_experiencia() {
    if (document.querySelector('#experiencia_page').style.display === 'block') {    
        document.querySelector('.inicio').style.display = 'flex',
        document.querySelector('#experiencia_page').style.display = 'none'
        document.querySelector('#projeto_page').style.display = 'none'
        document.querySelector('#formacao_page').style.display = 'none'
    } else {
        document.querySelector('.inicio').style.display = 'none',
    document.querySelector('#experiencia_page').style.display = 'block'
    document.querySelector('#projeto_page').style.display = 'none'
    document.querySelector('#formacao_page').style.display = 'none'
}       
}

function load_projeto() {
    if (document.querySelector('#projeto_page').style.display === 'block') {
        document.querySelector('.inicio').style.display = 'flex',
        document.querySelector('#experiencia_page').style.display = 'none'
        document.querySelector('#projeto_page').style.display = 'none'
        document.querySelector('#formacao_page').style.display = 'none'
    } else {
        document.querySelector('.inicio').style.display = 'none',
    document.querySelector('#experiencia_page').style.display = 'none'
    document.querySelector('#projeto_page').style.display = 'block'
    document.querySelector('#formacao_page').style.display = 'none'
}
}

function load_formacao() {
    if (document.querySelector('#formacao_page').style.display === 'block') {
        document.querySelector('.inicio').style.display = 'flex',
        document.querySelector('#experiencia_page').style.display = 'none'
        document.querySelector('#projeto_page').style.display = 'none'
        document.querySelector('#formacao_page').style.display = 'none'
    } else {
        document.querySelector('.inicio').style.display = 'none',
    document.querySelector('#experiencia_page').style.display = 'none'
    document.querySelector('#projeto_page').style.display = 'none'
    document.querySelector('#formacao_page').style.display = 'block'
}
}
*/