
$(document).ready(function () {
    $('li.dropdown').on('click', function() {
        var $el = $(this);
        if ($el.hasClass('open')) {
            var $a = $el.children('a.dropdown-toggle');
            if ($a.length && $a.attr('href')) {
                location.href = $a.attr('href');
            }
        }
    });
     /*  placeholder for IE 8 & IE 9  */
     $('[placeholder]').not('input[type="password"]').focus(function () {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
      }
      }).blur(function () {
          var input = $(this);
          if (input.val() == '' || input.val() == input.attr('placeholder')) {
          input.addClass('placeholder');
          input.val(input.attr('placeholder'));
          }
      }).blur();

      $('[placeholder]').parents('form').submit(function () {
          $(this).find('[placeholder]').each(function () {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
              input.val('');
          }
          })
      });
      /* end  placeholder for IE 8 & IE 9  */

      // browser window scroll (in pixels) after which the "back to top" link is shown
      var offset = 300,
      offset_opacity = 1200,
      scroll_top_duration = 700,
      $back_to_top = $('.cd-top');
      $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
          $back_to_top.addClass('cd-fade-out');
        }
      });
      //smooth scroll to top
      $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
          scrollTop: 0 ,
          }, scroll_top_duration
        );
      });
      $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $("#header2f,.wrapper2f").addClass("topfixed");
        } else {
            $("#header2f,.wrapper2f").removeClass("topfixed");
        }
    });

    $(".icon-viewpass").click(function(){  
        $(".icon-viewpass").toggleClass("notview");
    });

});
