import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor( menuButton, menuList ,events){
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';
   
    if(events === undefined)this.events = ['touchstart', 'click'];
else this.events = events;
  this.openMenu = this.openMenu.bind(this);
}
  
 openMenu(event) {
   event.preventDefalut();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }
addmenuMobileevent(){
  this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
}
  init() {
   if(this.menuButton && this.menuList){
     this.addmenuMobileevent();
   }
   return this;
  }
}
