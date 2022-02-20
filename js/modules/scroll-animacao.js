export default class AnimacaoScroll {
  constructor(section){
this.section = document.querySelector(section);
this.windowMetade = window.innerHeight * 0.6;
this.this.animaScroll = tgis.this.animaScroll.bind(this);
}

 animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        this.section.classList.remove('ativo');
      }
    });
  }
  init(){
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
}
