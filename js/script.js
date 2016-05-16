$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

$(document).ready(function(){

	$('ul.tabs-2 li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs-2 li').removeClass('current-2');
		

		$(this).addClass('current-2');
		
	})

})

$(document).ready(function(){

	$('ul.version-menu li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.version-menu li').removeClass('actual');
		$('.contenido').removeClass('actual');

		$(this).addClass('actual');
		$("#"+tab_id).addClass('actual');
	})

})

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});