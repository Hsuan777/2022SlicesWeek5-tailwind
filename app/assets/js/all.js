console.log('Hello!');

$(function() {
  $('#reply').on('click', () => {
    $('#replyTextarea').toggleClass('hidden');
    $('#replyBtnGroup').toggleClass('-bottom-[3.5rem] bottom-5 right-5');
    $('#replied').toggleClass('hidden');
  })
})
