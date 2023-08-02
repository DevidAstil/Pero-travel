$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.filter_item-title-1').on('click',function(){
        $('.plus-1').toggleClass('active');
        $(this).next().slideToggle('200');
    });
    $('.filter_item-title-2').on('click',function(){
        $('.plus-2').toggleClass('active');
        $(this).next().slideToggle('200');
    });
    $('.filter_item-title-3').on('click',function(){
        $('.plus-3').toggleClass('active');
        $(this).next().slideToggle('200');
    });
    $('.filter_item-title-4').on('click',function(){
        $('.plus-4').toggleClass('active');
        $(this).next().slideToggle('200');
    });
    $('.filter_item-title-5').on('click',function(){
        $('.plus-5').toggleClass('active');
        $(this).next().slideToggle('200');
    });
});


// const tabsBtn=document.querySelectorAll(".tabs__nav-btn");
// const tabsItem=document.querySelectorAll(".tabs__item");

// tabsBtn.forEach(function(item){
//     item.addEventListener("click",function(){
//         var currentBtn=item;
//         var tabId=currentBtn.getAttribute("data-tab");
//         var currentTab=document.querySelector(tabId);

//         tabsBtn.forEach(function(item){
//             item.classList.remove('active');
//         });
//         tabsItem.forEach(function(item){
//             item.classList.remove('active');
//         });

//         currentBtn.classList.add('active');
//         currentTab.classList.add('active');
//     });
// });

// document.querySelector(".tabs__nav-btn").click();


$(".js-range-slider").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 10000,
    from: 1600,
    to: 4000,
});

$('.amount_item').click(function(event){
    $(this).toggleClass('active');
    $('body').toggleClass('lock');
})

$('.catalog-filter_title--mobile').on('click',function(){
    $(this).next().slideToggle('200');
});

$( function(){
    $.datepicker.setDefaults($.datepicker.regional["ru"]);
    $('#datepicker').datepicker();
})
