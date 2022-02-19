"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tooltip =
/*#__PURE__*/
function () {
  function Tooltip(tooltips) {
    _classCallCheck(this, Tooltip);

    this.tooltips = document.querySelectorAll(tooltips); //bind do objeto da classe ao callback

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  _createClass(Tooltip, [{
    key: "onMouseMove",
    value: function onMouseMove(event) {
      this.tooltipBox.style.top = "".concat(event.pageY + 20, "px");

      if (event.pageX + 240 > window.innerWidth) {
        this.tooltipBox.style.left = "".concat(event.pageX - 150, "px");
      } else {
        this.tooltipBox.style.left = "".concat(event.pageX + 20, "px");
      }
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(event) {
      this.tooltipBox.remove();
      event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
      event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }
  }, {
    key: "criarTooltipBox",
    //cria tooltips box e coloca no body
    value: function criarTooltipBox(element) {
      var tooltipBox = document.createElement('div');
      var text = element.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      this.tooltipBox = tooltipBox;
    } //cria tooltips e adiciona os eventos no mousemove e mouseleave ao target

  }, {
    key: "onMouseOver",
    value: function onMouseOver(event) {
      //cria a tooltips box e coloca em uma propriedade
      this.criarTooltipBox(event.currentTarget);
      event.currentTarget.addEventListener('mousemove', this.onMouseMove);
      event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    } //adiciona os eventos de mouseOver a cada toooltips

  }, {
    key: "addTooltipsEventos",
    value: function addTooltipsEventos() {
      var _this = this;

      this.tooltips.forEach(function (item) {
        item.addEventListener('mouseover', _this.onMouseOver);
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.tooltips.length) {
        this.addTooltipsEventos();
      }

      return this;
    }
  }]);

  return Tooltip;
}();

exports["default"] = Tooltip;