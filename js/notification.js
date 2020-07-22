function notification() {
  'use strict';
  var dissmissButtons = document.querySelector(
    '.mzp-c-notification-bar-button');
    dissmissButtons.addEventListener('click',
      function (e) {
        e.currentTarget.parentNode.remove();
      }, false);
};
window.addEventListener('DOMContentLoaded', (event) => {
  notification();
});
