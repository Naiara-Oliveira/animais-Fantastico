"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = fetchBitcoin;

function fetchBitcoin(url, target) {
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (bitcoin) {
    var btcPreco = document.querySelector(target);
    btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
  })["catch"](function (erro) {
    return console.log(Error(erro));
  });
}