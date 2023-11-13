//    onclick="this.src='down.svg'; document.getElementById('txt4').classList.remove('invis')"
const $toggle = $('.arrow');

 $toggle.on('click', function() {
   if ($(this).hasClass('active')) {
     $(this).removeClass('active');
   } else {
     $(this).addClass('active');
   }
 });