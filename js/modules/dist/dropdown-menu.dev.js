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

var DropdownMenu =
/*#__PURE__*/
function () {
  function DropdownMenu(dropdownMenus, events) {
    _classCallCheck(this, DropdownMenu);

    this.dropdownMenus = document.querySelectorAll(dropdownMenus); // define touchstart e click como argumento padrão
    // de events caso o usuário não define

    if (events === undefined) this.events = ['touchstart', 'click'];else this.events = events;
    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  } // Ativa o dropdownmenu e adiciona
  // a função que observa o clique fora dele


  _createClass(DropdownMenu, [{
    key: "activeDropdownMenu",
    value: function activeDropdownMenu(event) {
      event.preventDefault();
      var element = event.currentTarget;
      element.classList.add(this.activeClass);
      (0, _outsideClick["default"])(element, this.events, function () {
        element.classList.remove('active');
      });
    } // adiciona os eventos ao dropdownmenu

  }, {
    key: "addDropdownMenusEvent",
    value: function addDropdownMenusEvent() {
      var _this = this;

      this.dropdownMenus.forEach(function (menu) {
        _this.events.forEach(function (userEvent) {
          menu.addEventListener(userEvent, _this.activeDropdownMenu);
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.dropdownMenus.length) {
        this.addDropdownMenusEvent();
      }

      return this;
    }
  }]);

  return DropdownMenu;
}();

exports["default"] = DropdownMenu;