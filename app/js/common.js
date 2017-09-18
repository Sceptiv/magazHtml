$(function() {

	$('.triger').click(function(){
		$("." + $(this).data("target")).toggle("slow");
		$(this).toggleClass('active');
	});

});
