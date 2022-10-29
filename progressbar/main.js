const button = document.querySelector('.but');
const hide = document.querySelector('.hide');
const progressBar = document.querySelector('.progress-bar');

const onClickHandle = async () => {
  hide.classList.remove('hide');
  button.classList.add('hide');
  const documentStyles = document.documentElement.style;

  let progress = 0;
  while (progress < 100) {
    progress = await simulateProgress(progress);
    if (progress % 5 === 0) {
      documentStyles.setProperty('--progress', `${progress}%`);
    }
  }
};

const simulateProgress = (progress) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(progress + 1);
    }, 50);
  }).then((res) => res);
};

button.addEventListener('click', () => onClickHandle());
