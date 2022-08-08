(function (){  
    const menuBurger = document.querySelector('.menu-burger');
    const menuClose = document.querySelector('.menu-close');
    const menu = document.querySelector('.header__navigation');
    const menuLogo = document.querySelector('.header__container-logo');
    const bodyLock = document.querySelector('body');

    function openMenu(){
        menu.classList.add('active');
        menuLogo.classList.add('active');
        bodyLock.classList.add('lock');
    }

    function closeMenu(){
        menu.classList.remove('active');
        menuLogo.classList.remove('active');
        bodyLock.classList.remove('lock');
    }

    menuBurger.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
})()