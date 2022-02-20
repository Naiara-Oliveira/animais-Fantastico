"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
    this["this"].animaScroll = tgis["this"].animaScroll.bind(this);
  }

  _createClass(AnimacaoScroll, [{
    key: "animaScroll",
    value: function animaScroll() {
      var _this = this;

      sections.forEach(function (section) {
        var sectionTop = section.getBoundingClientRect().top;
        var isSectionVisible = sectionTop - _this.windowMetade < 0;

        if (isSectionVisible) {
          section.classList.add('ativo');
        } else if (section.classList.contains('ativo')) {
          _this.section.classList.remove('ativo');
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.animaScroll();
      window.addEventListener('scroll', this.animaScroll);
    }
  }]);

  return AnimacaoScroll;
}();

exports["default"] = AnimacaoScroll;