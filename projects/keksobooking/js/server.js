'use strict';
(function () {
  var URL = 'https://github.com/lavalon1807/basaData/blob/main/data.json';

  window.savePins = [];

  window.loadPins = function (url, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', URL);
    xhr.addEventListener('load', function () {
        onSuccess(xhr.response);
    });
    xhr.send();
  };

  window.successPinsLoad = function (pins) {
    window.savePins = pins;
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < pins.length; i++) {
      fragment.appendChild(window.renderPin(pins[i]));
    }

    window.element.mapPins.appendChild(fragment);
    window.genCards(pins);
  };
})();
