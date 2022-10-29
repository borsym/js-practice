let btn = document.getElementById('btn');
let btnC = document.getElementById('btn-close');
let modal = document.querySelector('.modal');

btn.addEventListener('click', () => {
  modal.classList.add('open');
});

btnC.addEventListener('click', () => {
  modal.classList.remove('open');
});
