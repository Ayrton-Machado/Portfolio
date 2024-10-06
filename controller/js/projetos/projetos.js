import { criarBanner, btnBanner } from "./criarBanner.js";
 
document.addEventListener('DOMContentLoaded', () => {
    criarBanner();
    let banners = document.querySelectorAll('.banner')
    banners.forEach(banner => {
        console.log(banner)
    })
    btnBanner();
});