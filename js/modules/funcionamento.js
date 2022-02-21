export default class Funcionamento {
  constructor(funcionamento, activeClass) {

    this.funcionamento = document.querySelector(funcionamento);
this.activeClass = activeClass;
  }
  dadosFuncionamento(){
    this.diaSemanas = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemanas = this.funcionamento.dataset.horario.split(',').map(Number);
  }
  
  dadosAgora(){
    this.dataAgora = new Date();
    this.diaAagora = dataAgora.getDay();
    this.horarioAgora = dataAgora.getUTCHours() -3;
  
  }

  estarAberto(){
    const semanaAberta = this.diaSemanas.indexOf(this.diaAagora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemanas[0] && this.horarioAgora < this.horarioSemanas[1]);

  return semanaAberta && horarioAberto;
  }
  
  ativaAberta(){
    if(this.estarAberto())
    this.funcionamento.classList.add(activeClass);
  }
  init(){
    if(this.funcionamento){
      this.dadosFuncionamento();
      this.dadosAgora();
    this.ativarAberto();
  }
  return this;
}
}