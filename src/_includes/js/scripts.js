// HTML element selectors for quick access
var $window = $(window),
 	$document = $(document),
 	$body = $('body'),
 	$zaps = $('.zap');

$document.ready(function() {
	// Smooth scroll for on-page navigation links
	$('a[href^="#"]').on('click', function(e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$(".zap-link").mouseenter(function(){
	var $element = $(this);
	$element.css("z-index", "2");
	$element.find(".zap-link-border").addClass("zap-link-in");
	$element.find(".zap-link-border").removeClass("zap-link-out");
});

$(".zap-link").mouseleave(function(){
	var $element = $(this);
	$element.css("z-index", "auto");
	$element.find(".zap-link-border").addClass("zap-link-out");
	$element.find(".zap-link-border").removeClass("zap-link-in");
});
