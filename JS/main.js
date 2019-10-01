$(document).ready(function() {
	$('.nav-toggle').on('click', function(e) {
  
    e.preventDefault();

  	$('.nav').toggleClass('is-active')	
  	$('.layout').toggleClass('is-active')	
  	$('.nav-menu').toggleClass('is-active')	
   
  });

  document.getElementById("defaultOpen").click();

});