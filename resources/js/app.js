window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
require('bootstrap');

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// init Swiper:
const swiper = new Swiper('.swiper-container', {

   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
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