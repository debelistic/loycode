
$(window).on('load', function () {
	$(".nav li").on("click", function () {
		$(".nav li").removeClass("active");
		$(this).addClass("active");
	});
})




