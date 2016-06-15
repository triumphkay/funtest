$(window).scroll(function(event){
	if ($(this).scrollTop() > 0) {
		$("header").addClass("collapse");
	}else{
		$("header").removeClass("collapse");
	}
});