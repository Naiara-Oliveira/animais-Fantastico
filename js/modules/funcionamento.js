export default function initFuncionamneto() {
  const funcionamento = document.querySelector('[data-semana]');
  const diaSemanas = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemanas = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAagora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberta = diaSemanas.indexOf(diaAagora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemanas[0] && horarioAgora < horarioSemanas[1]);

  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
