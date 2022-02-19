"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal =
/*#__PURE__*/
function () {
  function Modal(botaoAbrir, botaoFechar, containerModal) {
    _classCallCheck(this, Modal);

    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.activeClass = 'ativo'; //bind this callback para fazer referencia ao objeto da classe

    this.eventoToggleModal = this.eventoToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  } //abre ou fecha modal


  _createClass(Modal, [{
    key: "toggleModal",
    value: function toggleModal() {
      this.containerModal.classList.toggle(this.activeClass);
    } //adiciona o evento de toggle ao modal

  }, {
    key: "eventoToggleModal",
    value: function eventoToggleModal(event) {
      event.preventDefault();
      this.toggleModal();
    } //fecha o modal ao clicar fora

  }, {
    key: "cliqueForaModal",
    value: function cliqueForaModal(event) {
      if (event.target === this.containerModal) {
        this.toggleModal(event);
      }
    } //adiciona eventos aos elementos do modal

  }, {
    key: "addModalEventos",
    value: function addModalEventos() {
      this.botaoAbrir.addEventListener('click', this.eventoToggleModal);
      this.botaoFechar.addEventListener('click', this.eventoToggleModal);
      this.containerModal.addEventListener('click', this.cliqueForaModal);
    }
  }, {
    key: "init",
    value: function init() {
      if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
        this.addModalEventos();
      }

      return this;
    }
  }]);

  return Modal;
}();

exports["default"] = Modal;