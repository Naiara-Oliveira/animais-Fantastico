export default class AnimaNumeros {
  constructor(numeros ,observerClass ){
this.numeros = document.querySelecotAll(numeros);
this. observerTarget = document.querySelector( observerTarget);
this.observerClass = observerClass; 

this.handleMutation = this.handleMutation.bind(this);

}
//recebe um elemento do dom com contexto em seu textoincrementa a partir de 0 ate o numero final
static incrementarNumero(numero){
  const total = +numero.innerText;
  const inscremento = Math.floor(total / 100);
  let start = 0;
  const timer = setInterval(() => {
    start += inscremento;
    numero.innerText = start;
    if (start > total) {
      numero.innerText = total;
      clearInterval(timer);
    }
  }, 25 * Math.random());
};

//ativar o incremenatrNumeros para cada numeros do dom
 animaNumeros(){
      this.numeros.forEach(numero => {
    this.constructor.incrementarNumero(numero); 
  });
 }
 handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
addMutationObserver(){
  this.observer = new MutationObserver(this.handleMutation);
  this.observer.observe(this.observerTarget, { attributes: true });
}

init(){
  if(this.numeros.length && this.observerTarget)
  this.addMutationObserver();
  return this;
}

}

