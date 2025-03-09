document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accessibility__nav button');
  const articles = document.querySelectorAll('.accessibility__content article');

  if (buttons.length > 0 && articles.length > 0) {
    articles[0].style.display = 'block';

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('aria-controls');
        const targetArticle = document.getElementById(targetId);

        articles.forEach((article) => (article.style.display = 'none'));

        if (targetArticle) {
          targetArticle.style.display = 'block';
        }
      });
    });
  }
});
