window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
require('bootstrap');

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// init Swiper:
var menu = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];
const swiper = new Swiper('.swiper-container', {

   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
     renderBullet: function (index, className) {
       return '<span class="' + className + '">' + (menu[index]) + '</span>';
     }
   },
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
   centeredSlides: true
 });

$(document).on('ready', $('.textbox > div.text').addClass('movetext'));

$('.textbox > div.text').on('animationend', function(){
  $('.textbox > div.text').removeClass('movetext') 
});

// selecciona el nodo target
var target = document.querySelector('.swiper-pagination');

// Crea una instancia de observer
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    $('.textbox > div.text').addClass('movetext');
  });
});

// Configura el observer:
var config = { attributes: true };

// pasa al observer el nodo y la configuracion
observer.observe(target, config);