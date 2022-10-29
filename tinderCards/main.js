let activeIndex = 0;

const groups = document.getElementsByClassName('card-group');

const handleHateClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  const currentGoup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  currentGoup.dataset.status = 'before';

  nextGroup.dataset.status = 'becoming-active-from-after';

  setTimeout(() => {
    nextGroup.dataset.status = 'active';
    activeIndex = nextIndex;
  }, 100);
};
const handleLoveClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  const currentGoup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  currentGoup.dataset.status = 'after';

  nextGroup.dataset.status = 'becoming-active-from-before';

  setTimeout(() => {
    nextGroup.dataset.status = 'active';
    activeIndex = nextIndex;
  }, 100);
};
