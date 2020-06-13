'use strict';
var NUMBERS_OF_PHOTOS = 25;
var LIKES = {
  min: 15,
  max: 200
};
var ESCAPE = 27;
var containerScale = document.querySelector('.img-upload__scale');
var plus = containerScale.querySelector('.scale__control--bigger');
var minus = containerScale.querySelector('.scale__control--smaller');
var value = containerScale.querySelector('.scale__control--value');
var redactorPhoto = document.querySelectorAll('.effects__radio');
var wrapperPicture = document.querySelector('.img-upload__preview');
var mainPicture = wrapperPicture.querySelector('img');
var loader = document.querySelector('.img-upload');
var popup = loader.querySelector('#upload-file');
var instrument = loader.querySelector('.img-upload__overlay');
var closeInstrument = loader.querySelector('#upload-cancel');
var list = document.querySelector('.pictures');
var form = document.querySelector('.img-upload__text');
var formComents = form.querySelector('.text__description');

function init() {
  value.value = '100%';
  renderPhotos();
}

var generateNumber = function (min, max) {
  var number = Math.floor((Math.random() * (max - min) + min));
  return number;
};

var makeElement = function (tagName, className) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

var renderPhoto = function (count) {
  var image = makeElement('img', 'picture__img');
  var link = makeElement('a', 'picture');
  var paragraph = makeElement('p', 'picture__info');
  var spanComent = makeElement('span', 'picture__comments');
  var spanLikes = makeElement('span', 'picture__likes');

  image.alt = 'фотография пользователя';
  image.width = 182;
  image.height = 182;
  image.src = 'photos/' + (count + 1) + '.jpg';

  spanComent.textContent = generateNumber(1, 25);
  spanLikes.textContent = generateNumber(LIKES.min, LIKES.max);

  paragraph.appendChild(spanComent);
  paragraph.appendChild(spanLikes);

  link.appendChild(image);
  link.appendChild(paragraph);
  list.appendChild(link);
};

var renderPhotos = function () {
  for (var i = 0; i < NUMBERS_OF_PHOTOS; i++) {
    renderPhoto(i);
  }
};

var showElement = function (element) {
  element.classList.remove('hidden');
};

var hideElement = function (element) {
  element.classList.add('hidden');
};

formComents.onfocus = function () {
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESCAPE) {
      showElement(instrument);
    }
  });
};

formComents.onblur = function () {
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESCAPE) {
      hideElement(instrument);
    }
  });
};

minus.addEventListener('click', function () {
  var line = (parseInt(value.value, 10) - 25);
  if (line >= 25) {
    value.value = line + '%';
    mainPicture.style.transform = 'scale(' + line / 100 + ')';
  }
});

plus.addEventListener('click', function () {
  var line = (parseInt(value.value, 10) + 25);
  if (line <= 100) {
    value.value = line + '%';
    mainPicture.style.transform = 'scale(' + line / 100 + ')';
  }
});
var effect = document.querySelector('input[name="effect"]:checked');
popup.addEventListener('click', function (evt) {
  evt.preventDefault();
  showElement(instrument);
  value.value = '100%';
  mainPicture.style.transform = 'scale(1)';

  if (effect.value === 'none') {
    div.style.display = 'none';
  }
});

closeInstrument.addEventListener('click', function () {
  hideElement(instrument);
  mainPicture.className = '';
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESCAPE) {
    hideElement(instrument);
  }
});

/* слайдер*/
var div = document.querySelector('.img-upload__effect-level');
var instrumentHandl = instrument.querySelector('.effect-level__pin');
var instrumentLine = instrument.querySelector('.effect-level__line');
var instrumentDepth = instrument.querySelector('.effect-level__depth');

redactorPhoto.forEach(function (effects) {
  effects.addEventListener('click', function () {
    if (effects.value !== 'none') {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }

    mainPicture.className = 'effects__preview--' + effect.value;
    mainPicture.style.filter = '';
    instrumentDepth.style.width = '100%';
    instrumentHandl.style.left = '100%';

    if (effects.value === 'chrome') {
      mainPicture.style.filter = 'grayscale(1)';
    } else if (effects.value === 'sepia') {
      mainPicture.style.filter = 'sepia(1)';
    } else if (effects.value === 'marvin') {
      mainPicture.style.filter = 'invert(1)';
    } else if (effects.value === 'phobos') {
      mainPicture.style.filter = 'blur(3px)';
    } else if (effects.value === 'heat') {
      mainPicture.style.filter = 'brightness(3)';
    }
  });
});

instrumentHandl.onmousedown = function (e) {
  var thumbCoords = getCoords(instrumentHandl);
  var shiftX = e.pageX - thumbCoords.left;
  var sliderCoords = getCoords(instrumentLine);
  var rightEdge = instrumentLine.offsetWidth;

  document.onmousemove = function (evt) {
    var newLeft = evt.pageX - shiftX - sliderCoords.left;
    var moveBar = instrumentHandl.style.left;
    var procent = parseInt((parseInt(instrumentHandl.style.left, 10) * 100) / rightEdge, 10);
    var instrumentEffect = document.querySelector('input[name="effect"]:checked');

    instrumentDepth.style.width = parseInt(moveBar, 10) + 'px';

    if (instrumentEffect.value === 'chrome') {
      mainPicture.style.filter = 'grayscale(' + (procent / 100) + ')';
    } else if (instrumentEffect.value === 'sepia') {
      mainPicture.style.filter = 'sepia(' + (procent / 100) + ')';
    } else if (instrumentEffect.value === 'marvin') {
      mainPicture.style.filter = 'invert(' + (procent / 100) + ')';
    } else if (instrumentEffect.value === 'phobos') {
      mainPicture.style.filter = 'blur(' + parseInt(procent / 33, 10) + 'px)';
    } else if (instrumentEffect.value === 'heat') {
      var brightness = procent / 33;

      if (parseInt(brightness, 10) === 0) {
        brightness = 1;
      }

      mainPicture.style.filter = 'brightness(' + brightness + ')';
    } else {
      mainPicture.style.filter = '';
      newLeft = 0;
    }

    if (newLeft < 0) {
      newLeft = 0;
    }

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    instrumentHandl.style.left = newLeft + 'px';
  };

  document.onmouseup = function () {
    document.onmousemove = document.onmouseup = null;
  };

  return false;
};

instrumentHandl.ondragstart = function () {
  return false;
};

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}

init();
