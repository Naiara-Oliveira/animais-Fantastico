import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import AnimacaoScroll from './modules/scroll-animacao.js';


Tooltip();
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();
const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const dropdownmenu = DropdownMenu('[data-dropdown]')
dropdownmenu.init();

const menuMobile = MenuMobile('[data-menu="button"]' , '[data-menu="list"]');
menuMobile.init();
fetchBitcoin('http://blockchain.info/ticker' , '.btc-preco');
initFuncionamneto();
fetchAnimais('../../animaisapi.json', '.numeros-grid');

const scrollAnima = new AnimacaoScroll('[data-anime="scroll"]');
scrollAnima.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();