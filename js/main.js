// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
// 	showSlides(slideIndex += n);
// }

// function currentSlide(n) {
// 	showSlides(slideIndes = n);
// }

// function showSlides(n) {
// 	var i;
// 	var slides = document.getElementsByClassName("mySlides");
// 	var dots = document.getElementsByClassName("dot");
// 	if (n > slides.length) {slideIndex = 1}
// 	if (n < 1) {slideIndex = slides.length}
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}	
// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(" active", "");
// 	}
// 	slides[slideIndex-1].style.display = "block";
// 	dots[slideIndex-1].className += " active";
// }

// $(document).ready(function() {

// $(".next").click(function() {
//     var $curr = $('.mySlides img:visible'),
//         $next = ($curr.next().length) ? $curr.next() : $('.slideshow img').first();
//         $next.css('z-index',2).fadeIn('slow', function() {
//         $curr.hide().css('z-index',0);
//         $next.css('z-index',1);
//     });
// });

// $(".prev").click(function() {
//     var $curr = $('.mySlides img:visible'),
//         $prev = ($curr.prev().length) ? $curr.prev() : $('.slideshow img').last();
//         $prev.css('z-index',2).fadeIn('slow', function() {
//         $curr.hide().css('z-index',0);
//         $prev.css('z-index',1);
//     });
// });
// });
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 

    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.opacity = 1;

    setTimeout(showSlides, 5000); // Change image every 8 seconds
}


// $(function () {
//     var currentCarousel = 0;
//     var timeoutID = null;
//     var timeoutDuration = 8000;
//     var prev = $('.prev');
//     var next = $('.next');
//     var mySlides = $('.mySlides');
//     var numQuotes = mySlides fade.length;
    
//     function changeCarousel() {
//         mySlides.hide();
//         mySlides.eq(currentCarousel).show();
//         currentCarousel += 1;
//         if (currentCarousel === numQuotes) { currentCarousel = 0; }
//         clearTimeout(timeoutID);
//         timeoutID = setTimeout(function () {
//             changeCarousel();
//         }, timeoutDuration);
//     }
//     changeCarousel();
//     quoteChange.click(function (e) {
//         e.preventDefault();
//         changeCarousel();
//     });
// });


// var main = function(){

//     var paused = false

//    $('.next').click(function(){
//     paused = true;
//     $('#mySlides > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#mySlides');
//    }); 

//    // $('.prev').click(function(){
//    //  paused = true;
//    //  .fadeIn(1000)
//    //  .prependTo('#mySlides')
//    //  .next()
//    //  .fadeOut(1000
//    //  .end();
//    // });

//    setInterval(function(){
//     if (paused === false){
//         $('#mySlides > div:first')
//         .fadeOut(1000)
//         .next()
//         .fadeIn(1000)
//         .end()
//         .appendTo("mySlides");
//     };
//    },  5000);
// };

$(document).ready(main);




