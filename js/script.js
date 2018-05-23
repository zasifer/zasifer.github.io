feather.replace()
jQuery(document).ready(function() {
  $('.loader-custom').delay( 400 ).fadeOut( 400 );
  $(".navbar-menu li, .post").click(function() {

      thisdata = $(this).attr('data-href');
      console.log(thisdata);

      window.location.href = thisdata;
  });
});
