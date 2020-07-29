var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var list = document.querySelector('.main-nav__list');

list.classList.remove('main-nav--nojs');
list.classList.add('main-nav__list--closed');
navToggle.classList.add('main-nav__toggle--color');
navToggle.classList.remove('main-nav__toggle--none');

navToggle.addEventListener('click', function() {
  if (list.classList.contains('main-nav__list--closed')) {
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
    list.classList.remove('main-nav__list--closed');
    list.classList.add('main-nav__list--opened');
    navToggle.classList.remove('main-nav__toggle--color');
  } else {
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
    list.classList.add('main-nav__list--closed');
    list.classList.remove('main-nav__list--opened');
    navToggle.classList.add('main-nav__toggle--color');
  }
});
