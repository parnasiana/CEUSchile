$('#hero-arrow-r').click(function() {
    var currentSlide = $('.slide.active');
    var nextSlide = currentSlide.next();

    currentSlide.fadeOut(300).removeClass('active');
    nextSlide.fadeIn(300).addClass('active');

    if(nextSlide.length == 0) {
        $('.slide').first().fadeIn(300).addClass('active');
    }
});

$('#hero-arrow-l').click(function() {
    var currentSlide = $('.slide.active');
    var prevSlide = currentSlide.prev();

    currentSlide.fadeOut(300).removeClass('active');
    prevSlide.fadeIn(300).addClass('active');

    if(prevSlide.length == 0) {
        $('.slide').last().fadeIn(300).addClass('active');
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    navText: ["","<i class='fa fa-angle-right arrow-owl-ceus'></i>"],
    dots: true,
    responsive:{
        0: {
            items:1
        },
        600: {
            items:1
        },
        768:{
            items:3
        }
    }
    
});

twttr.widgets.createTimeline(
    {
      sourceType: "profile",
      screenName: "TwitterDev"
    },
    document.getElementById("container")
  );
