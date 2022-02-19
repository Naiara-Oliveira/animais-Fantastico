"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initFetchAnimais;

var _animaNumeros = _interopRequireDefault(require("./anima-numeros.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function initFetchAnimais() {
  function createAnimal(animal) {
    var div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = "<h3>".concat(animal.specie, "</h3><span data-numero>").concat(animal.total, "</span>");
    return div;
  }

  function fetchAnimais(url) {
    var animaisResponse, animaisJSON, numerosGrid, animanumeros;
    return regeneratorRuntime.async(function fetchAnimais$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch(url));

          case 3:
            animaisResponse = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(animaisResponse.json());

          case 6:
            animaisJSON = _context.sent;
            numerosGrid = document.querySelector('.numeros-grid');
            animaisJSON.forEach(function (animal) {
              var divAnimal = createAnimal(animal);
              numerosGrid.appendChild(divAnimal);
            });
            animanumeros = new _animaNumeros["default"]('[data-numero]', 'numeros', 'ativo');
            animanumeros.init();
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 13]]);
  }

  fetchAnimais('./animaisapi.json');
}