

  /*--INSTAFEED--*/

  function buildPost(data){
    let $wrapper=$('<a>',{class:'post-insta', href: data.link, target:"_blank"});
    let $img=$('<img>', {src: data.images.low_resolution.url});
    $wrapper.append($img);
     $('.instafeed').append($wrapper);
 }

 function buildNext(url){
     $('.next-button').remove();
     let $button =$('<button>', {onclick:'buildPosts("'+url+'")', class:'next-button', text: 'Cargar más'});
         $('.instafeed').after($button);
 }

 function buildPosts(url){
     fetch(url)
         .then(function(response){
             return response.json()
         })
         .then(function(json){
             for (let data of json.data){
                 buildPost(data);
             }
         buildNext(json.pagination.next_url);            

         })
 }

 $(document).ready(function(){
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
     const url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=4029417903.1677ed0.5d48eeac74c5491e8ee042a507136c9d&count=9";
     buildPosts(url);

/*--POP-UP AXES--*/


/*--education popup--*/
$(".edu-open").on("click", function() {
    $(".edu-over, .edu-cont").addClass("appear");
  });

$(".edu-close, .edu-over").on("click", function() {
$(".edu-over, .edu-cont").removeClass("appear");
});

/*--society popup--*/
$(".soc-open").on("click", function() {
    $(".soc-over, .soc-cont").addClass("appear");
  });

$(".soc-close, .soc-over").on("click", function() {
$(".soc-over, .soc-cont").removeClass("appear");
});

/*--environment popup--*/
$(".env-open").on("click", function() {
    $(".env-over, .env-cont").addClass("appear");
  });

$(".env-close, .env-over").on("click", function() {
$(".env-over, .env-cont").removeClass("appear");
});

/*--development popup--*/
$(".dev-open").on("click", function() {
    $(".dev-over, .dev-cont").addClass("appear");
  });

$(".dev-close, .dev-over").on("click", function() {
$(".dev-over, .dev-cont").removeClass("appear");
});

$(".no-event").unbind('click');

 });





