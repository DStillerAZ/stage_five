$('document').ready(function() {
	$('.information').on('click', function() {
     $(this).parent().toggleClass('display-notes');
     $(this).find("p").toggle();
  });
});