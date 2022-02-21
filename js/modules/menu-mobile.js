import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor( menuButton, menuList ,events){
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';
    if(events === undefined){
    this.events = ['click', 'touchstart'];
  }else{
    this.events = events;
  }
  this.openMenu = this.openMenu.bind(this);
}
 openMenu() {
    this.menuList.classList.add(activeClass);
    this.menuButton.classList.add(activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(activeClass);
      this.menuButton.classList.remove(activeClass);
    });
  }
addmenuMobileevent(){
  this.events.forEach((evento) => menuButton.addEventListener(evento, openMenu));
}
  init() {
   if(this.menuButton && this.menuList){
     this.addmenuMobileevent();
   }
   return this;
  }
}
