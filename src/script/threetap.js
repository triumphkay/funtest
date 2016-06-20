$(window).scroll(function(event){
	if ($(this).scrollTop() > 20) {
		$("header, div#zero").addClass("collapse");
	}else{
		$("header, div#zero").removeClass("collapse");
	}
});