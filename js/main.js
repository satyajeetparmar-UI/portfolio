$(window).on('load', function () {
  /* --- Preloader --- */
  $("#preloader").delay(1000).addClass('loaded');

  /* --- Isotope Portfolio Setup --- */
  if ($('.portfolio-items').length) {
    var $elements = $(".portfolio-items"),
      $filters = $('.portfolio-filter ul li');
    $elements.isotope();

    $filters.on('click', function () {
      $filters.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).data('filter');
      $(".portfolio-items").isotope({
        filter: selector,
        hiddenStyle: {
          transform: 'scale(.2) skew(30deg)',
          opacity: 0
        },
        visibleStyle: {
          transform: 'scale(1) skew(0deg)',
          opacity: 1,
        },
        transitionDuration: '.5s'
      });
    });
  }
});

$(document).ready(function () {
  "use strict";
  /* --- Active Current Link --- */
  $('.header-main ul li a').on('click', function () {
    if ($('.header-main.on').length) {
      $('.header-main').removeClass('on');
    }
  });

  /* --- Mobile Toggle Click Setup --- */
  $('.header-toggle').on('click', function () {
    $('.header-main').toggleClass('on');
  });


  /* --- Portfolio Tilt Setup --- */
  $('.pt-portfolio .portfolio-items .item figure').tilt({
    maxTilt: 3,
    glare: true,
    maxGlare: .6,
    reverse: true
  });

  /* --- Portfolio Image Link --- */
  $(".portfolio-items .image-link").magnificPopup({
    type: "image"
  });

  /* --- Validate Contact Form --- */
  if ($("#contact-form").length) {
    $("#contact-form").validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: "required",
      },
      messages: {
        name: "Please enter your name",
        email: "Please enter your email address"
      },

      submitHandler: function (form) {
        $.ajax({
          type: "POST",
          url: "/mail.php",
          data: $(form).serialize(),
          success: function () {
            $("#loader").hide();
            $("#success").slideDown("slow");
            setTimeout(function () {
              $("#success").slideUp("slow");
            }, 3000);
            form.reset();
          },
          error: function () {
            $("#loader").hide();
            $("#error").slideDown("slow");
            setTimeout(function () {
              $("#error").slideUp("slow");
            }, 3000);
          }
        });
        return false;
      }
    });
  }
});
