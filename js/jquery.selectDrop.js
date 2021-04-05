$(document).ready(function() {
	$(".dropdown img.flag").addClass("visibility");

	$(".dropdown dt a").click(function() {
		$(".dropdown dd ul").toggle();
	});
				
	$(".dropdown dd ul li a").click(function() {
		var text = $(this).html();
		$(".dropdown dt a span").html(text);
		$(".dropdown dd ul").hide();
	});
				
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("dropdown"))
			$(".dropdown dd ul").hide();
	});
});