const number = document.querySelector('.numbers');
const screenContent = document.querySelector('.content');
let currentOperation = '';
let currentNumber = 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['+', '-', '*', '/'];

const onNumberClick = (e) => {
  screenContent.innerHTML += e.target.innerHTML;
  currentNumber = Number(screenContent.innerHTML);
};

const onSymbolClick = (e) => {
  if (currentOperation) {
    renderResult();
  }
  currentOperation = e.target.innerHTML;
  screenContent.innerHTML = '';
};
const Button = (display, isNumber = true) => {
  const button = document.createElement('button');
  button.onclick = isNumber ? onNumberClick : onSymbolClick;
  button.innerHTML = display;
  return button;
};

const renderNumbers = () => {
  numbers.forEach((num) => {
    number.appendChild(Button(num));
  });
};

const renderSymbols = () => {
  symbols.forEach((symbol) => {
    number.appendChild(Button(symbol, false));
  });
};

const renderResult = () => {
  switch (currentOperation) {
    case '+':
      screenContent.innerHTML = currentNumber + Number(screenContent.innerHTML);
      break;
    case '-':
      screenContent.innerHTML = currentNumber - Number(screenContent.innerHTML);
      break;
    case '*':
      screenContent.innerHTML = currentNumber * Number(screenContent.innerHTML);
      break;
    case '/':
      screenContent.innerHTML = currentNumber / Number(screenContent.innerHTML);
      break;
    default:
      break;
  }
};

const constructor = () => {
  renderNumbers();
  renderSymbols();
};

constructor();
