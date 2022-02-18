import initScrollSuave from './modules/scroll-suave.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownmenu from './modules/dropdown-menu.js';
import initmenuMobile from './modules/menu-mobile.js';
import initFuncionamneto from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initBitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';

initScrollSuave();
initAccordion();
initTabNav();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();
Modal();
initTooltip();
initDropDownmenu();
initmenuMobile();
initFuncionamneto();
initFetchAnimais();
initBitcoin();
initAnimacaoScroll();