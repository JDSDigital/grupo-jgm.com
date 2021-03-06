$(document).ready(function() {

    /**
     * Validar el formulario de contacto
     */
    $('#btn-enviar').on('click', function () {

        event.preventDefault();
        
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');
        var comentario = document.getElementById('comentario');

        validateInput(nombre);
        validateInput(apellido);
        validateInput(comentario);
        isEmail(email);
        
        if (validateInput(nombre) && validateInput(apellido) && validateInput(comentario) && isEmail(email)) {
        
            var form = [nombre.value, apellido.value, email.value, comentario.value];
            var jsonForm = JSON.stringify(form);
            
            $.ajax({
                type: "POST",
                url: "./email.php",
                data: {data : jsonForm}, 
                cache: false,
                error: function () {
                    $('.not-sent').show();
                },
                success: function(){
                    $('.form-group').hide();
                    $('.sent').show();
                }
            });
            
        }
    });

    /**
     * Reglas para validación de los campos
     *
     * @param input
     * @param event
     * @returns {boolean}
     */
    function validateInput (input) {
        if (input.value == '') {
            event.preventDefault();
            $('#' + input.id).next('span').text("Este campo no puede estar vacío").show();
            $('#' + input.id).removeClass('input-success').addClass('input-error');
            return false;
        } else if ((input.id == 'nombre' || input.id == 'apellido') && input.value.length > 20) {
            event.preventDefault();
            $('#' + input.id).next('span').text("Este campo no puede contener mas de 20 caracteres").show();
            $('#' + input.id).removeClass('input-success').addClass('input-error');
            return false;
        } else if (input.value.length > 200) {
            event.preventDefault();
            $('#' + input.id).next('span').text("Este campo no puede contener mas de 200 caracteres").show();
            $('#' + input.id).removeClass('input-success').addClass('input-error');
            return false;
        } else if (isNaN(input.value) == false) {
            event.preventDefault();
            $('#' + input.id).next('span').text("Este campo no puede contener números").show();
            $('#' + input.id).removeClass('input-success').addClass('input-error');
            return false;
        } else if (!isValid(input.value)) {
            event.preventDefault();
            $('#' + input.id).next('span').text("Este campo no puede contener caracteres especiales").show();
            $('#' + input.id).removeClass('input-success').addClass('input-error');
            return false;
        } else if (hasUrl(input.value)) {
            event.preventDefault();
            $('#' + input.id).next('span').text("Este campo no puede contener vínculos").show();
            $('#' + input.id).removeClass('input-success').addClass('input-error');
            return false;
        } else {
            $('#' + input.id).next('span').hide();
            $('#' + input.id).removeClass('input-error').addClass('input-success');
            return true;
        }
    }

    /**
     * Valida que el campo contenga una dirección de correo válida
     *
     * @param email
     * @returns {boolean}
     */
    function isEmail (email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(email.value)) {
            $('#' + email.id).next('span').hide();
            $('#' + email.id).removeClass('input-error').addClass('input-success');
            return true;
        } else {
            event.preventDefault();
            $('#' + email.id).next('span').text("Debe colocar una dirección de correo válida").show();
            $('#' + email.id).removeClass('input-success').addClass('input-error');
            return false;
        }
    }

    /**
     * Valida que el campo no contenga caracteres especiales
     *
     * @param str
     * @returns {boolean}
     */
    function isValid (str) {
        return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
    }

    /**
     * Valida que el campo no contenga vínculos
     *
     * @param str
     * @returns {boolean}
     */
    function hasUrl (str) {
        return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(str)
    }
});
$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

    $('#accordion a').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.listaServicios li').removeClass('current-2');
        $('.tab-content-2').removeClass('current-2');
        $('.tab-content-3').removeClass('current-3');
        $('.bottomMenu li').removeClass('current-3');

        $('.main-link').addClass('current-2');
        $("#"+tab_id).addClass('current-2');
        $('.1').addClass('current-3');

        if (tab_id == "tab-1") {
            $("#tab-111").addClass('current-3');
        } else if (tab_id == "tab-2") {
            $("#tab-121").addClass('current-3');
        }
        else if (tab_id == "tab-3") {
            $("#tab-131").addClass('current-3');
        }
        else if (tab_id == "tab-4") {
            $("#tab-141").addClass('current-3');
        }
        else if (tab_id == "tab-5") {
            $("#tab-211").addClass('current-3');
        }
        else if (tab_id == "tab-6") {
            $("#tab-221").addClass('current-3');
        }
        else if (tab_id == "tab-7") {
            $("#tab-231").addClass('current-3');
        }
        else if (tab_id == "tab-9") {
            $("#tab-411").addClass('current-3');
        }
        else if (tab_id == "tab-13") {
            $("#tab-511").addClass('current-3');
        }
        else if (tab_id == "tab-14") {
            $("#tab-521").addClass('current-3');
        }
        else if (tab_id == "tab-15") {
            $("#tab-531").addClass('current-3');
        }
    });

    $('.listaServicios li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.listaServicios li').removeClass('current-2');
        $('.tab-content-2').removeClass('current-2');
        $('.tab-content-3').removeClass('current-3');
        $('.bottomMenu li').removeClass('current-3');

        $(this).addClass('current-2');
        $("#"+tab_id).addClass('current-2');
        $('.1').addClass('current-3');


        if (tab_id == "tab-1") {
            $("#tab-111").addClass('current-3');
        } else if (tab_id == "tab-2") {
            $("#tab-121").addClass('current-3');
        }
        else if (tab_id == "tab-3") {
            $("#tab-131").addClass('current-3');
        }
        else if (tab_id == "tab-4") {
            $("#tab-141").addClass('current-3');
        }
        else if (tab_id == "tab-5") {
            $("#tab-211").addClass('current-3');
        }
        else if (tab_id == "tab-6") {
            $("#tab-221").addClass('current-3');
        }
        else if (tab_id == "tab-7") {
            $("#tab-231").addClass('current-3');
        }
        else if (tab_id == "tab-9") {
            $("#tab-411").addClass('current-3');
        }
        else if (tab_id == "tab-13") {
            $("#tab-511").addClass('current-3');
        }
        else if (tab_id == "tab-14") {
            $("#tab-521").addClass('current-3');
        }
        else if (tab_id == "tab-15") {
            $("#tab-531").addClass('current-3');
        }
    });

    $('.listaServiciosBottom li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.listaServiciosBottom li').removeClass('current-3');
        $('.tab-content-3').removeClass('current-3');

        $(this).addClass('current-3');
        $("#"+tab_id).addClass('current-3');
    });

    $(".fancybox").fancybox({
        openEffect	: 'fade',
        closeEffect	: 'fade',
        helpers : {
            title : { type : 'inside' }
        }, // helpers
        beforeLoad: function() {
            this.title = $(this.element).attr('caption');
        }
    });

});

/**
 * JSSOR Start
 *
 * @param containerId
 */
jssor_1_slider_init = function(containerId) {

    var jssor_1_SlideshowTransitions = [
      {$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
    ];

    var jssor_1_options = {
      $AutoPlay: true,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_1_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
        $Class: $JssorThumbnailNavigator$,
        $Cols: 10,
        $SpacingX: 8,
        $SpacingY: 8,
        $Align: 360
      }
    };

    var jssor_1_slider = new $JssorSlider$(containerId, jssor_1_options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 800);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    //responsive code end
};
/**
 * JSSOR End
 */