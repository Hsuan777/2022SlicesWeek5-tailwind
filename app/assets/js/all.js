console.log('Hello!');

$(document).ready(() => {
  $('#menu-mobile-btn').on('click', () => {
    $('#menu-mobile').toggleClass('d-none');
  });
  $('#agree').on('click', () => {
    $('#agreeFalse').toggleClass('d-none');
    $('#agreeTrue').toggleClass('d-none');
  })
});
