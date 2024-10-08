import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

try {
    new Accordion('.faq-accordion-container', {
        duration: 400,
        showMultiple: true,
    });


    const faqBtns = document.querySelectorAll('.faq-item-btn');

    faqBtns.forEach(button => {
        button.addEventListener('click', () => {
            const arrowIcon = button.querySelector('.faq-btn-icon');
            arrowIcon.classList.toggle('arrow-up');
        })
    });
}
catch (error){
console.error ("Error", error)
}

// new Accordion('.faq-accordion-container', {
//     duration: 600,
//     showMultiple: false,
// });
