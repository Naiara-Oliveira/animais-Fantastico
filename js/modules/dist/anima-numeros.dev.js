"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnimaNumeros =
/*#__PURE__*/
function () {
  function AnimaNumeros(numeros, observerClass) {
    _classCallCheck(this, AnimaNumeros);

    this.numeros = document.querySelecotAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this);
  } //recebe um elemento do dom com contexto em seu textoincrementa a partir de 0 ate o numero final


  _createClass(AnimaNumeros, [{
    key: "animaNumeros",
    //ativar o incremenatrNumeros para cada numeros do dom
    value: function animaNumeros() {
      var _this = this;

      this.numeros.forEach(function (numero) {
        _this.constructor.incrementarNumero(numero);
      });
    }
  }, {
    key: "handleMutation",
    value: function handleMutation(mutation) {
      if (mutation[0].target.classList.contains(this.observerClass)) {
        this.observer.disconnect();
        this.animaNumeros();
      }
    }
  }, {
    key: "addMutationObserver",
    value: function addMutationObserver() {
      this.observer = new MutationObserver(this.handleMutation);
      this.observer.observe(this.observerTarget, {
        attributes: true
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.numeros.length && this.observerTarget) this.addMutationObserver();
      return this;
    }
  }], [{
    key: "incrementarNumero",
    value: function incrementarNumero(numero) {
      var total = +numero.innerText;
      var inscremento = Math.floor(total / 100);
      var start = 0;
      var timer = setInterval(function () {
        start += inscremento;
        numero.innerText = start;

        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    }
  }]);

  return AnimaNumeros;
}();

exports["default"] = AnimaNumeros;