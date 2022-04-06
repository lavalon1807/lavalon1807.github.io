'use strict';
(function () {
  // var URL = 'https://22.javascript.pages.academy/keksobooking/data';
  // var URL2 = 'https://javascript.pages.academy/keksobooking/data';
  window.savePins = []


  // Тут нет доступа к серверу, чтобы работало сделал отдельный файл data.js
  // window.loadPins = function (url, onSuccess) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.responseType = 'json';

  //   xhr.open('GET', URL);
  //   xhr.addEventListener('load', function () {
  //       onSuccess(xhr.response);
  //   });
  //   xhr.send();
  // };

  window.successPinsLoad = function () {
    window.savePins = window.data;
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.savePins.length; i++) {
      fragment.appendChild(window.renderPin(window.window.savePins[i]));
    }

    window.element.mapPins.appendChild(fragment);
    window.genCards(window.savePins);
  };
})();
