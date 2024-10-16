const banner = document.getElementById('banners')
const bannerBottom = document.getElementById('cartoes')

export function trocarBanner(numeroBanner) {
    banner.style.left = `-${numeroBanner}00vw`
    bannerBottom.style.left = `-${numeroBanner}00vw`
}
