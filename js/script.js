function updateScrollIndicatorSize() {
    const fullHeight = document.body.scrollHeight,
        innerHeight = window.innerHeight;

    document.querySelector('.scroll-indicator-line').style.width =
        ((window.pageYOffset * 100) / (fullHeight - innerHeight)).toFixed(0) + '%';
}

updateScrollIndicatorSize();

window.addEventListener('scroll', updateScrollIndicatorSize);
window.addEventListener('resize', updateScrollIndicatorSize);
