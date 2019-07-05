var angle = 340;
$(document).ready(function() {
	var tocken = "apolo911"

	$(".sent").hide();

	setInterval(updateGradient,100);
	
	$('ul li a').click(function(event) {
		$('ul li a').css('opacity', '0.6');
		$(this).css('opacity', '1');
	});


	$(".border").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).css({
			cursor: 'pointer'
		});
		$(this).find(".micro").hide();
		$(this).find(".technologies").css("margin-top","2%");
		$(this).find(".technologies").show();

	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).find(".micro").show();
		$(this).find(".technologies").hide();

	});

	var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1/M1pFp0+RFXYB8nGcnJ4R8QgkITgKuV5JiZGKOgA9t8FvA2hCSMwDex3/HQCCTsGgMtXtSjZSoxCS4tYeq1xdxsF24PtnogHR+jv0xrdkb5DXiJjue13EXvE80axYwPwHk5LiCCwrR6XmRhmrijaEcEX+uM/rbuvc=",tocken);
	var url= decrypted.toString(CryptoJS.enc.Utf8);
	
	$('#mybutton').click(function(event){

		$('form').submit(function(event){
		event.preventDefault();
		$('#mybutton').hide();
		var email = $("input[name='mail']").val()
		var text = $("textarea").val();
		var msg = "Rajab you have a Message from your website %0AEmail : "+email+" %0AMessage:  "+text;
		

		$.get(url+""+msg, function(data, status){
        
        $(".sent").show('slow/400/fast');
        $("form").hide('slow/400/fast');
		});	


		});
	});

	$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}  );
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