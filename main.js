//=========================== Show Menu =========================\\
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
        // Validate that Variables exist
    if (toggle && nav) {
        // we add the show-menu class to the div tag with the nav__menu class
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');


//==================== Remove Menu =====================\\
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//================== Chang Background Header ================\\

function scrollHeader() {
    const nav = document.getElementById('header')
        // When the scroll is greater than 200 viewport height ,add the scroll header class to your header
    if (this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);

//================= show scrolltop ===================\\

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
        // When the scroll is greater than 560 viewport height ,add the scroll header class to your header
    if (this.scrollY >= 560) scrollTop.classList.add('scroll-top');
    else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop);

//================== Dark Light Theme =================\\
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
})

// For Scroll Reveal \\
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});
sr.reveal('.home__data, .home__img, .about__data,.about__img,.services__content,.menu__content,.footer__container,.footer__copy', {
    interval: 200
})
sr.reveal('.app__data,.contact__button', {
    origin: 'right',
    interval: 200
})
sr.reveal('.app__img ,.contact__data', {
    origin: 'left',
    interval: 200
})