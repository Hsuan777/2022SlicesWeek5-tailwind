"use strict";

console.log('Hello!');
$(function () {
  $('#reply').on('click', function () {
    $('#replyTextarea').toggleClass('hidden');
    $('#replyBtnGroup').toggleClass('-bottom-[3.5rem] bottom-5 right-5');
    $('#replied').toggleClass('hidden');
  });
});
//# sourceMappingURL=all.js.map
