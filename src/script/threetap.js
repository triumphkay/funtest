$(window).scroll(function(event){
	if ($(this).scrollTop() > 0) {
		$("header, div#zero").addClass("collapse");
	}else{
		$("header, div#zero").removeClass("collapse");
	}
});