"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = fetchAnimais;

var _animaNumeros = _interopRequireDefault(require("./anima-numeros.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function fetchAnimais(url, target) {
  //cria a div contendo informacoes com o total de animais
  function createAnimal(animal) {
    var div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = "<h3>".concat(animal.specie, "</h3><span data-numero>").concat(animal.total, "</span>");
    return div;
  } //preenche cada animal no dom


  function preencherAnimais(animal) {
    var divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  } //anima os numeros de cada animal 


  function animaAnimaisNumeros() {
    var animanumeros = new _animaNumeros["default"]('[data-numero]', 'numeros', 'ativo');
    animanumeros.init();
  } // Puxa os animais atraves de um arquivo json e cria cada animal utilizando criaAnimal


  function criarAnimais() {
    var animaisResponse, animaisJSON;
    return regeneratorRuntime.async(function criarAnimais$(_context) {
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
            //apos a transformacao de json ativa as funcoes para preencher e animar os numeros
            animaisJSON.forEach(function (animal) {
              return preencherAnimais(animal);
            });
            animaAnimaisNumeros();
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  }

  return criarAnimais();
  fetchAnimais('./animaisapi.json');
}