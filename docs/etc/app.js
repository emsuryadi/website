$(document).ready(function(){
	var welcomeBox 	= $("#welcome-box");
	var contentBox	= $("#content-box");
	var wrapperBox 	= $("#wrapper-box");
	var navbarBox	= $("#navbar-box");
	var navbarShown	= false;
	var restTop		= wrapperBox.offset().top;
	
	// Calculate welcome
	function calculate_welcome() {
		contentBox.css('margin-top', welcomeBox.height() + (55*2));
	}
	calculate_welcome();
	$(window).on('resize', function(){
		calculate_welcome();
	});

	// Listen scroll
	function navbar_scroll() {
		var x = restTop - $(window).scrollTop();
		if (x <= 80) {
			if (!navbarShown) {
				navbarShown = true;
				navbarBox.show();
			}
		} else if (x > 80) {
			if (navbarShown) {
				navbarShown = false;
				navbarBox.fadeOut('fast');
			}
		}
	}
	navbar_scroll();
	$(document).bind('scroll', function() {
		navbar_scroll();
	}); 
});