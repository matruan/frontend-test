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

 $('.swiper-pagination-bullet').on('click', function(e){
  e.preventDefault();
  $('.text').toggleClass('movetext');
});