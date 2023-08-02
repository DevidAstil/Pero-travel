new Swiper('.route_slider',{
    spaceBetween: 18,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination: {
        el:'.swiper-pagination',
        type: 'progressbar',
    },
    slidesPerGroup:0.5,
    slidesPerView:1.5,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints:{
      // 720:{
      //   slidesPerView:1,
      //   slidesPerGroup:1,
      // },
      450:{
        slidesPerView:1.5,
        slidesPerGroup:1,
      },
      350:{
        slidesPerView:1,
        slidesPerGroup:1,
        spaceBetween: 20,
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

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'ru',
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next',
    },
    height:456,
    aspectRatio: 0,
    events: [
      { 
        title: '06:00-20:00',
        start: '2022-01-31',
        end: '2022-01-31',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-30',
        end: '2022-01-30',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-29',
        end: '2022-01-29',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-28',
        end: '2022-01-28',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-27',
        end: '2022-01-27',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-26',
        end: '2022-01-26',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-25',
        end: '2022-01-25',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-24',
        end: '2022-01-24',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-23',
        end: '2022-01-23',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-22',
        end: '2022-01-22',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-21',
        end: '2022-01-21',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-20',
        end: '2022-01-20',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-19',
        end: '2022-01-19',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-18',
        end: '2022-01-18',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-17',
        end: '2022-01-17',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-16',
        end: '2022-01-16',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-15',
        end: '2022-01-15',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-14',
        end: '2022-01-14',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-13',
        end: '2022-01-13',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-12',
        end: '2022-01-12',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-11',
        end: '2022-01-11',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-10',
        end: '2022-01-10',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-09',
        end: '2022-01-09',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-08',
        end: '2022-01-08',
      },
      { 
        title: '06:00-20:00',
        start: '2022-01-07',
        end: '2022-01-07',
      },
    ]
  });
  calendar.render();
  calendar.getEventById( 'fc-dom-14' )
});

$(document).ready(function(){
  $('.header_burger').click(function(event){
      $('.header_burger,.header_menu').toggleClass('active');
      $('body').toggleClass('lock');
  })
});