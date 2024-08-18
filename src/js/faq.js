import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


const accordionFaq = new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
});

console.log('Accordion initialized:', accordionFaq);

const faqBtns = document.querySelectorAll('.faq-item-btn');

faqBtns.forEach(button => {
    button.addEventListener('click', () => {
        const arrowIcon = button.querySelector('.faq-btn-icon');
        arrowIcon.classList.toggle('arrow-up');
    })
});




