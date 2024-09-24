document.addEventListener('DOMContentLoaded', () => {
    window.history.pushState("", "", "/");
    
    document.querySelector('#experiencia').addEventListener('click', () => toggleView('experiencia_page'));
    document.querySelector('#projetos').addEventListener('click', () => toggleView('projeto_page'));
    document.querySelector('#formacao').addEventListener('click', () => toggleView('formacao_page'));
    
});

function toggleView(viewID) {
    const views = ['inicio', 'projeto_page', 'formacao_page', 'experiencia_page'];

    views.forEach(view => {
        const viewElement = document.querySelector(`#${view}`)
        
        if (view === viewID) {
            window.history.replaceState(``, ``, `${viewID}`)
            
            if (viewElement.classList.contains('hidden')) {
                viewElement.classList.remove('hidden')
            } else {
                viewElement.classList.add('hidden')
                document.querySelector('#inicio').classList.remove('hidden')
                window.history.pushState("", "", "/");
            }
        } else {
            viewElement.classList.add('hidden')
        }
    });
}