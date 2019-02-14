const backgroundFlip = [...document.querySelectorAll(".card>div:nth-of-type(3)")];
const descriptionFlip = [...document.querySelectorAll(".card>div:nth-of-type(2)")];
const nameFlip = [...document.querySelectorAll("div.card>p:nth-child(2) ")];
const cards = [...document.querySelectorAll(".card")];



$(".card").on('click', function () {
 backgroundFlip[$(this).index()].classList.toggle('bcg-flip');
 descriptionFlip[$(this).index()].classList.toggle('description-flip');
 nameFlip[$(this).index()].classList.toggle('name-flip');
})

const isInViewport = function () {
 var elementTop = $(this).offset().top;
 var elementBottom = elementTop + $(this).outerHeight();

 var viewportTop = $(window).scrollTop();
 var viewportBottom = viewportTop + $(window).height();

 return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function () {
 $('.card').each(function () {
  if ($(this).isInViewport()) {
   $('.card').addClass('scroll');
  }
 })
})