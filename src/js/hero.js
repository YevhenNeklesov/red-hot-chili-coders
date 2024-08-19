document.addEventListener('DOMContentLoaded', function () {
  try {
    const title = document.querySelector('.main-title');

    if (title) {
      title.style.animation =
        'slideInLeft 1s ease forwards, glowAndFade 2s ease-in-out 1';
    }

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes glowAndFade {
          0% {
            text-shadow: 0 0 10px #fff;
          }
          100% {
            text-shadow: 0 0 0px #fff;
          }
        }

        .main-title {
          animation: slideInLeft 1s ease forwards, glowAndFade 2s ease-in-out 1;
        }
        `;
    document.head.appendChild(style);
  } catch (error) {
    console.error('Error applying animation to the main-title:', error);
  }
});
