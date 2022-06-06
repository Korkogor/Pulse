$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992, //от 0 до 768
                settings: {
                dots: true,
                arrows: false
                }
            }
        ]
      });
  });

