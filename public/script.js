const form = document.querySelector('form');
const translation = document.querySelector('#translation');

form.addEventListener('submit', e => {
  e.preventDefault();

  translation.innerHTML = '';

  fetch('/api/translate', {
    method: 'POST',
    body: new FormData(form)
  })
    .then(res => res.json())
    .then(data => {
      translation.innerHTML = data.error
        ? `<span class="error">${data.error}</span>`
        : data.translation;
    });
});