let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let cnt = document.getElementById('count');
let count = 0;
wrapper.addEventListener(
  'click',
  (e) => (cnt.innerHTML = e.target.innerHTML === 'increase' ? ++count : --count)
);
