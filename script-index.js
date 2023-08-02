new Swiper('.popular_slider',{
    spaceBetween: 20,
    navigation:{
        nextEl:'.swiper-button-next-popular',
        prevEl:'.swiper-button-prev-popular',
    },
    pagination: {
        el:'.popular-pagination',
        type: 'progressbar',
    },
    slidesPerGroup:1,
    slidesPerView:3.5,
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 'auto',
    // breakpoints:{
    //   450:{
    //     slidesPerView:1.5,
    //     slidesPerGroup:1,
    //   },
    //   350:{
    //     slidesPerView:1,
    //     slidesPerGroup:1,
    //     spaceBetween: 20,
    //   },
    // },
});

new Swiper('.header_slider',{
    spaceBetween: 20,
    slidesPerGroup:1,
    slidesPerView:1.5,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints:{
      460:{
        slidesPerView:1.5,
      },
      350:{
        spaceBetween: 40,
        slidesPerView:1.2,
      },
    },
});

new Swiper('.review_slider',{
    spaceBetween: 20,
    navigation:{
        nextEl:'.swiper-button-next2',
        prevEl:'.swiper-button-prev2',
    },
    pagination: {
        el:'.review-pagination',
        type: 'progressbar',
    },
    slidesPerGroup:1,
    slidesPerView:1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints:{
      1500:{
        slidesPerGroup:1,
        slidesPerView:2.5,
        slidesPerView: 'auto',
      },
      1285:{
        slidesPerGroup:1,
        slidesPerView:1.8,
        spaceBetween: 20,
      },
      930:{
        slidesPerGroup:1,
        slidesPerView:1.8,
        spaceBetween: 20,
      },
      0:{
        slidesPerGroup:1,
        slidesPerView:1.2,
        spaceBetween: 20,
        slidesPerView: 'auto',
      }
    },
});

$(".gallery_item").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
});

$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
  });