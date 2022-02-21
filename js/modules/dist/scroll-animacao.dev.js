"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _debounce = _interopRequireDefault(require("./debounce.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnimacaoScroll =
/*#__PURE__*/
function () {
  function AnimacaoScroll(section) {
    _classCallCheck(this, AnimacaoScroll);

    this.section = document.querySelector(section);
    this.windowMetade = window.innerHeight * 0.6;
    this["this"].checkDistancia = (0, _debounce["default"])(this.checkDistancia.bind(this), 200);
  } //pega a distancia de cada item em relacao ao topo do site


  _createClass(AnimacaoScroll, [{
    key: "getDistancia",
    value: function getDistancia() {
      var _this = this;

      this.distancia = [this.section].map.forEach(function (section) {
        var offeset = section.offesetTop;
        return {
          Element: section,
          offeset: Math.floor(offeset - _this.windowMetade)
        };
      });
    } //verifica a distancia em cada objeto em relacao ao scroll do site

  }, {
    key: "checkDistancia",
    value: function checkDistancia() {
      this.distancia.forEach(function (item) {
        if (window.pageYOffset > item.offeset) {
          item.element.classList.add('ativo');
        } else if (section.classList.contains('ativo')) {
          item.element.classList.remove('ativo');
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.sections.length) {
        this.getDistancia();
        this.checkDistancia();
        window.addEventListener('scroll', this.checkDistancia);
      }

      return this;
    } // Remove o event de scroll

  }, {
    key: "stop",
    value: function stop() {
      window.removeEventListener('scroll', this.checkDistance);
    }
  }]);

  return AnimacaoScroll;
}();

exports["default"] = AnimacaoScroll;