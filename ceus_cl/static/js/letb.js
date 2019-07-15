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
    items: 3,    
    loop:true,
    margin:120,
    nav:true,
    navText: ["","<i class='fa fa-angle-right arrow-owl-ceus'></i>"],
    dots: true,
});