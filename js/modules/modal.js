export default class Modal {

  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.activeClass = 'ativo';
    
    //bind this callback para fazer referencia ao objeto da classe
    this.eventoToggleModal = this.eventoToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  //abre ou fecha modal
  toggleModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }
  //adiciona o evento de toggle ao modal
  eventoToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  //fecha o modal ao clicar fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }
  //adiciona eventos aos elementos do modal
<<<<<<< Updated upstream
addModalEventos(){
  this.botaoAbrir.addEventListener('click', this.eventoToggleModal);
  this.botaoFechar.addEventListener('click', this.eventoToggleModal);
  this.containerModal.addEventListener('click', this.cliqueForaModal);
}
init(){
 if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
this.addModalEventos();
}
return this;
  }
}

=======
  addModalEventos() {
    this.botaoAbrir.addEventListener('click', this.eventoToggleModal);
    this.botaoFechar.addEventListener('click', this.eventoToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEventos();
    }
    return this;
  }
>>>>>>> Stashed changes
