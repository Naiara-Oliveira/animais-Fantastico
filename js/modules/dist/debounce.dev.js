"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = debounce;

function debounce(element, delay) {
  var timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
    }, delay);
  };
}