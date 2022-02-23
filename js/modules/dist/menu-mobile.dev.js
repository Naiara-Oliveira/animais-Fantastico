"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _outsideClick = _interopRequireDefault(require("./outsideClick.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenuMobile =
/*#__PURE__*/
function () {
  function MenuMobile(menuButton, menuList, events) {
    _classCallCheck(this, MenuMobile);

    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';
    if (events === undefined) this.events = ['touchstart', 'click'];else this.events = events;
    this.openMenu = this.openMenu.bind(this);
  }

  _createClass(MenuMobile, [{
    key: "openMenu",
    value: function openMenu(event) {
      var _this = this;

      event.preventDefalut();
      this.menuList.classList.add(this.activeClass);
      this.menuButton.classList.add(this.activeClass);
      (0, _outsideClick["default"])(this.menuList, this.events, function () {
        _this.menuList.classList.remove(_this.activeClass);

        _this.menuButton.classList.remove(_this.activeClass);
      });
    }
  }, {
    key: "addmenuMobileevent",
    value: function addmenuMobileevent() {
      var _this2 = this;

      this.events.forEach(function (evento) {
        return _this2.menuButton.addEventListener(evento, _this2.openMenu);
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.menuButton && this.menuList) {
        this.addmenuMobileevent();
      }

      return this;
    }
  }]);

  return MenuMobile;
}();

exports["default"] = MenuMobile;