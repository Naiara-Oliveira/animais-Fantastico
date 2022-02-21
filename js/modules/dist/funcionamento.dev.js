"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Funcionamento =
/*#__PURE__*/
function () {
  function Funcionamento(funcionamento, activeClass) {
    _classCallCheck(this, Funcionamento);

    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  _createClass(Funcionamento, [{
    key: "dadosFuncionamento",
    value: function dadosFuncionamento() {
      this.diaSemanas = this.funcionamento.dataset.semana.split(',').map(Number);
      this.horarioSemanas = this.funcionamento.dataset.horario.split(',').map(Number);
    }
  }, {
    key: "dadosAgora",
    value: function dadosAgora() {
      this.dataAgora = new Date();
      this.diaAagora = dataAgora.getDay();
      this.horarioAgora = dataAgora.getUTCHours() - 3;
    }
  }, {
    key: "estarAberto",
    value: function estarAberto() {
      var semanaAberta = this.diaSemanas.indexOf(this.diaAagora) !== -1;
      var horarioAberto = this.horarioAgora >= this.horarioSemanas[0] && this.horarioAgora < this.horarioSemanas[1];
      return semanaAberta && horarioAberto;
    }
  }, {
    key: "ativaAberta",
    value: function ativaAberta() {
      if (this.estarAberto()) this.funcionamento.classList.add(activeClass);
    }
  }, {
    key: "init",
    value: function init() {
      if (this.funcionamento) {
        this.dadosFuncionamento();
        this.dadosAgora();
        this.ativarAberto();
      }

      return this;
    }
  }]);

  return Funcionamento;
}();

exports["default"] = Funcionamento;