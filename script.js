const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

const backArrow = document.querySelector('.back-arrow');

backArrow.addEventListener('click', () => {
  //back button website
  window.location.href = 'https://sam45643.github.io/main-page.github.io/';
});
