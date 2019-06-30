var angle = 115;
$(document).ready(function() {

	setInterval(updateGradient,100);
	
	$('ul li a').click(function(event) {
		$('ul li a').css('opacity', '0.6');
		$(this).css('opacity', '1');
	});

});

function updateGradient(){
	if(angle>360){
		angle=0;
	}
	angle = angle +1;

	$('.nav').css({
		background: "linear-gradient("+angle+"deg, #2196f3  41%,#9932CC 77%)"
	});
	$('.pic_wrapper').css({
		background: "linear-gradient("+angle+"deg, #2196f3  48%,#9932CC 77%)"
	});
	
}