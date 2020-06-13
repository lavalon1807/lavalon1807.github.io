var button = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');
var stats = document.querySelector('.stats');
var footer = document.querySelector('.page-footer');
var bain = document.querySelector('.bain');
var bainDesktop = document.querySelector('.bain__desktop');
var bainSelection = document.querySelector('.bain__selection');
var divBain = document.querySelector('div');
var main = document.querySelector('main');
var button = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');
var stats = document.querySelector('.stats');
var footer = document.querySelector('.page-footer');
var bain = document.querySelector('.bain');
var bainDesktop = document.querySelector('.bain__desktop');
var divBain = document.querySelector('div');

var buttonCity = document.querySelector('.user-list__link');

var modalCity = document.querySelector('.modal');
var pageMain = document.querySelector('.page-main');
var bodyMain = document.querySelector('.body-main');
var modalClosed = document.querySelector('.closed-modal');

var typeCity1 = document.querySelector('.eee__1');
var typeCity2 = document.querySelector('.eee__2');
var typeCity3 = document.querySelector('.eee__3');
var typeCity4 = document.querySelector('.eee__4');
var typeCity5 = document.querySelector('.eee__5');

var checkCity1 = document.querySelector('.user-list__link--novosibirsk');
var checkCity2 = document.querySelector('.user-list__link--ircutsk');
var checkCity3 = document.querySelector('.user-list__link--smolensk');
var checkCity4 = document.querySelector('.user-list__link--volgograd');
var checkCity5 = document.querySelector('.user-list__link--amur');
/* Задать вопрос */
var buttonQuestion = document.querySelector('.social__question');
var modalQuestion = document.querySelector('.modal-question');
var modalQuestionClosed = document.querySelector('.modal-question__closed');

var modalCheckbox = document.querySelector('.modal-question__checkbox');

button.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav__closed')) {
    divBain.classList.remove('bain');

    mainNav.classList.remove('main-nav__closed');
    mainNav.classList.add('main-nav__opened');

    stats.classList.add('stats__closed');
    stats.classList.remove('stats__opened');

    footer.classList.remove('page-footer__closed');
    footer.classList.add('page-footer__opened');

    bainDesktop.classList.remove('bain__desktop--closed');
    bainDesktop.classList.add('bain__desktop--opened');

    button.classList.remove('page-header__toggle--closed');
    button.classList.add('page-header__toggle--opened');

    pageMain.classList.remove('page-main__closed');

  } else {
    divBain.classList.add('bain');

    mainNav.classList.add('main-nav__closed');
    mainNav.classList.remove('main-nav__opened');

    stats.classList.remove('stats__closed');
    stats.classList.add('stats__opened');

    footer.classList.add('page-footer__closed');
    footer.classList.remove('page-footer__opened');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    button.classList.add('page-header__toggle--closed');
    button.classList.remove('page-header__toggle--opened');

    pageMain.classList.remove('page-main__closed');
  }
})

checkCity1.addEventListener('click', function() {
  if (window.innerWidth <= 1366) {
    pageMain.classList.add('page-main__closed');
    modalCity.classList.add('modal-city__opened');
    modalCity.classList.remove('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bodyMain.classList.add('body-main__closed');

    bain.classList.add('bain__closed--dark');
  } else {
    pageMain.classList.add('page-main__opened');
    modalCity.classList.add('modal-city__opened');
    modalCity.classList.remove('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bain.classList.add('bain__closed--dark');
  }
})
