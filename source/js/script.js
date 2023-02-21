const navPanel = document.querySelector('.page-header__nav');
const navToggle = document.querySelector('.page-header__toggle');

navPanel.classList.add('page-header__nav--closed');

navToggle.addEventListener('click', function() {
  if (navPanel.classList.contains('page-header__nav--closed')){
    navPanel.classList.remove('page-header__nav--closed');
    navPanel.classList.add('page-header__nav--opened');
  } else {
    navPanel.classList.remove('page-header__nav--opened');
    navPanel.classList.add('page-header__nav--closed');
  }
});

