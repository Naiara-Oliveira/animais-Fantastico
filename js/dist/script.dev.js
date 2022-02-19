"use strict";

var _scrollSuave = _interopRequireDefault(require("./modules/scroll-suave.js"));

var _accordion = _interopRequireDefault(require("./modules/accordion.js"));

var _tabNav = _interopRequireDefault(require("./modules/tab-nav.js"));

var _modal = _interopRequireDefault(require("./modules/modal.js"));

var _tooltip = _interopRequireDefault(require("./modules/tooltip.js"));

var _dropdownMenu = _interopRequireDefault(require("./modules/dropdown-menu.js"));

var _menuMobile = _interopRequireDefault(require("./modules/menu-mobile.js"));

var _funcionamento = _interopRequireDefault(require("./modules/funcionamento.js"));

var _fetchAnimais = _interopRequireDefault(require("./modules/fetch-animais.js"));

var _fetchBitcoin = _interopRequireDefault(require("./modules/fetch-bitcoin.js"));

var _scrollAnimacao = _interopRequireDefault(require("./modules/scroll-animacao.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dropdownMenu["default"])();
(0, _menuMobile["default"])();
(0, _fetchBitcoin["default"])();
(0, _scrollAnimacao["default"])();
(0, _funcionamento["default"])();
(0, _fetchAnimais["default"])();
(0, _fetchBitcoin["default"])();
(0, _dropdownMenu["default"])();
(0, _menuMobile["default"])();
(0, _funcionamento["default"])();
(0, _fetchAnimais["default"])();
(0, _fetchBitcoin["default"])();
(0, _scrollAnimacao["default"])();
var scrollSuave = new _scrollSuave["default"]('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
var tabnav = new _tabNav["default"]('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();
var accordion = new _accordion["default"]('[data-anime="accordion"] dt');
accordion.init();
var tooltips = new _tooltip["default"]('[data-tooltip]');
tooltips.init();
var modal = new _modal["default"]('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();