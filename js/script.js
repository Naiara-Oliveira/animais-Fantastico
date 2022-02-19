import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropDownmenu from './modules/dropdown-menu.js';
import initmenuMobile from './modules/menu-mobile.js';
import initFuncionamneto from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import initBitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';

initDropDownmenu();
initmenuMobile();
initBitcoin();
initAnimacaoScroll();
initFuncionamneto();
fetchAnimais('../animaisapi.json', '.numeros-grid');
initBitcoin();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

Tooltip();
initDropDownmenu();
initmenuMobile();
initFuncionamneto();
initBitcoin();
initAnimacaoScroll();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();
const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();


