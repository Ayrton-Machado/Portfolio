const banner = document.getElementById('banners')
const bannerBottom = document.getElementById('cartoes')

export function trocarBanner(numeroBanner) {
    banner.style.left = `-${numeroBanner}00vw`
}

export function trocarCard(numeroBanner) {
    bannerBottom.style.left = `-${numeroBanner}00vw`
}