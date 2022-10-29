let button = document.getElementById('button');
let color = document.getElementById('color');
let background = document.getElementById('background-color');

const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

button.addEventListener('click', () => {
  const color = getRandomColor();
  color.innerText = `${color}`;
  console.log(color);
  background.style.backgroundColor = color;
});
