export default class Modal {
  constructor(botaoAbrir,  botaoFechar, containerModal){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
   this.containerModal = document.querySelector(containerModal);
  
   this.eventoToggleModal = this.eventoToggleModal.bind(this);
   
   this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
 toggleModal() {
   
    this.containerModal.classList.toggle('ativo');
  }
eventoToggleModal(event){
  event.preventDefault();
  this.toggleModal();
}
  cliqueForaModal(event) {
    if (event.target === this.toggleModal) {
      this.toggleModal(event);
    }
  }
  init(){
    if (botaoAbrir && botaoFechar && containerModal) {
  
    botaoAbrir.addEventListener('click', this.eventoToggleModal);
    botaoFechar.addEventListener('click', this.eventoToggleModal);
    containerModal.addEventListener('click', this.cliqueForaModal);
  }
  return this;
}

}