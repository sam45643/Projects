const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  
  // If the clicked element is a "Read More" button
  if (e.target.tagName === 'BUTTON') {
    const url = e.target.dataset.url; // Retrieve the URL from the data-url attribute of the button
    window.location.href = url; // Navigate to the URL
  }

  // If the clicked element is a navigation button
  if (e.target.matches('.next')) {
    slider.append(items[0]);
  } else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);
  }
}

document.addEventListener('click', activate, false);
