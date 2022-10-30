const mainpage = document.querySelector('.mainpage');
const hidden = document.querySelector('.hidden-menubar');
const handleButtonClick = () => {
  //   mainpage.style.marginBottom = '100px';
  hidden.classList.remove('hide');
  mainpage.style.transform = 'translateY(-20%)';
};
