new VenoBox({
    selector: '.my-video-links',
});

$('.event_image_slider').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    centerPadding: '0',
    asNavFor: '.event_text_slider',
    responsive: [
    {
      breakpoint: 767.98,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }
   
  ]
});









$('.event_text_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:'<i class="fa-solid fa-chevron-right right"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-left left"></i>',
    asNavFor: '.event_image_slider'
});


$('.counterr').counterUp({
    delay: 10,
    time: 1000
});





