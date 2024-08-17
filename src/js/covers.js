document.addEventListener('DOMContentLoaded', () => {
  const coverItems = document.querySelectorAll('.cover-item');

  coverItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
  });
});
