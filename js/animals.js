const cards = [...document.querySelectorAll(".card")];
const backgroundFlip = [...document.querySelectorAll(".card>div:nth-of-type(3)")];
const descriptionFlip = [...document.querySelectorAll(".card>div:nth-of-type(2)")];
const nameFlip = [...document.querySelectorAll("div.card>p:nth-child(2) ")];


$(".card").on('click', function () {
 backgroundFlip[$(this).index()].classList.toggle('bcg-flip');
 descriptionFlip[$(this).index()].classList.toggle('description-flip');
 nameFlip[$(this).index()].classList.toggle('name-flip');
})