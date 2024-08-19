import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

(() => {
    const mobileMenu = document.querySelector('.js-modal-window');
    const openMenuBtn = document.querySelector('.js-open-btn');
    const closeMenuBtn = document.querySelector('.js-modal-close-btn');
    const closeMenuLink = document.querySelectorAll('.js-modal-link');
  
    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');
  
!isMenuOpen? disableBodyScroll(document.body): enableBodyScroll(document.body)
    };
    closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
//   close menu on tab
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        enableBodyScroll(document.body);
    });
    
})();
