export default class Tooltip {
  constructor(tooltips){
    this.tooltips = document.querySelectorAll(tooltips);
  
  
  //bind do objeto da classe ao callback
this.onMouseMove = this.onMouseMove.bind(this);
this.onMouseLeave = this.onMouseLeave.bind(this);
this.onMouseOver = this.onMouseOver.bind(this);
}


 onMouseMove(event) {
  
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      if(event.pageX + 240 > window.innerWidth){
      this.tooltipBox.style.left = `${event.pageX -  150}px`;
    }else{
    this.tooltipBox.style.left = `${event.pageX +  20}px`;
  }
 }

 onMouseLeave(event){
   
      this.tooltipBox.remove();
      event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
      event.currentTarget.removeEventListener('mousemove', this.onMouseMove);

  };
//cria tooltips box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
//cria tooltips e adiciona os eventos no mousemove e mouseleave ao target
  onMouseOver(event) {
    //cria a tooltips box e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }
  //adiciona os eventos de mouseOver a cada toooltips
addTooltipsEventos(){
  this.tooltips.forEach((item) => {
    item.addEventListener('mouseover', this.onMouseOver);
  });
}
init(){
  if(this.tooltips.length){
this.addTooltipsEventos();
  }
  return this;
}
}
