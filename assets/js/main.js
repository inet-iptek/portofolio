M.AutoInit();

var app = document.getElementById('text_');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('iNET Portfolio')
    .pauseFor(2500)
    .deleteAll()
    .start();

$(document).ready(function(){
	var prevScrollpos = 0,
		headerOrg = 100;

	$('#navbar').height($('#navwrap').height());

	var nav = $('nav');

	if($(window).height() - $(window).scrollTop() < 608)
	{
		nav.addClass('blue-grey darken-4');
		nav.addClass('z-depth-1');

		nav.removeClass('transparent');
		nav.removeClass('z-depth-0');

		// $('.brand-logo').css({
		// 	"margin-top" : "0em",
		// 	"font-size" : "2.1em"
		// });

		// $('.img-logo').attr('src', 'assets/svg/logo.svg');

		// $('#navwrap #nav-mobile').css({
		// 	"margin-top" : "0em"
		// });

	} else {
		nav.removeClass('blue-grey darken-4');
		nav.removeClass('z-depth-1');

		nav.addClass('transparent');
		nav.addClass('z-depth-0');
	}

	$(window).scroll(function(){

		/* 			Hide Navbar			 */

		var currentScrollpos = $(this).scrollTop();
		// console.log('Current : ' + currentScrollpos);
		// console.log('Prev1 : ' + prevScrollpos);
		// console.log('Header : ' + headerOrg);

		if(currentScrollpos > headerOrg)
		{
			if(prevScrollpos > currentScrollpos)
			{
				$("#navbar").css('top','0');
			} else {
				$("#navbar").css('top','-100px');
			}
			
		} else {
			$("#navbar").css('top','0');
		}

		prevScrollpos = currentScrollpos;
		// console.log('Prev2 : ' + prevScrollpos);

		var windowpos = $(window).scrollTop();

		if (windowpos > 50) {
			
			nav.addClass('blue-grey darken-4');
			nav.addClass('z-depth-1');

			nav.removeClass('transparent');
			nav.removeClass('z-depth-0');

			// $('.brand-logo').css({
			// 	"margin-top" : "0em",
			// 	"font-size" : "2.1em"
			// });

			// $('#navwrap #nav-mobile').css({
			// 	"margin-top" : "0em"
			// });

			// $('.img-logo').attr('src', 'assets/svg/logo.svg');


		} else {
			
			nav.removeClass('blue-grey darken-4');
			nav.removeClass('z-depth-1');

			nav.addClass('transparent');
			nav.addClass('z-depth-0');

			// $('.brand-logo').css({
			// 	"margin-top" : "0.75em",
			// 	"font-size" : "3.5em"
			// });

			// $('#navwrap #nav-mobile').css({
			// 	"margin-top" : "0.75em"
			// });

			// $('.img-logo').attr('src', 'assets/svg/logo-w.svg');

		}

	});

	$('a[href*="#"]')	  
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		    
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			&& 
			location.hostname == this.hostname
		) {
		      
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		     
			if (target.length) {
		        
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1500, function() {
		          
					var $target = $(target);
					$target.focus();
					
					// if ($target.is(":focus")) {
					// 	return false;
					// } else {
					// 	$target.attr('tabindex','-1');
					// 	$target.focus(); 
					// };
				});
			}
		}
	});
});