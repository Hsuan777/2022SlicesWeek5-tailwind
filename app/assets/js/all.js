console.log('Hello!');

$(function() {
  $('#menu-mobile-btn').on('click', () => {
    $('#menu-mobile').toggleClass('hidden');
  });
  $('#agree').on('click', () => {
    console.log(1);
    $('#agreeFalse').toggleClass('hidden');
    $('#agreeTrue').toggleClass('hidden');
  })
})
