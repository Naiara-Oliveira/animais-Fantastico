export default class AnimacaoScroll {
  constructor(section) {
    this.section = document.querySelector(section);
    this.windowMetade = window.innerHeight * 0.6;
    this.this.checkDistancia = this.checkDistancia.bind(this);
  }
  //pega a distancia de cada item em relacao ao topo do site
  getDistancia() {
    this.distancia = [this.section].map.forEach(section => {
      const offeset = section.offesetTop;
      return {
        Element: section,
        offeset: Math.floor(offeset - this.windowMetade),
      };
    });
  }
  //verifica a distancia em cada objeto em relacao ao scroll do site
  checkDistancia() {
    this.distancia.forEach((item) => {
    if(window.pageYOffset > item.offeset){
      item.element.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
       item.element.classList.remove('ativo');
      }
    });
  }
  
  init() {
    if(this.sections.length){
    this.getDistancia();
    this.checkDistancia();
    window.addEventListener('scroll', this.checkDistancia);
  }
return this;
}
//remove o evento de scroll
destruitAnimacaoScroll(){
  window.removeEventListener('scroll', this.checkDistancia);
}
}