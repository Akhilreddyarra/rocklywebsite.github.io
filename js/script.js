$(document).ready(function(){
   $('#slides').superslides({
   	animation: 'fade',
   	play: 3000,
   	pagination: false,
   });

   var typed = new Typed(".typed", {
    strings: ["Locally Sourced Rocks", "2-Day Shipping.", "Get RockBox once per Month"],
   typeSpeed: 70 ,
   loop: true,
   startDelay: 1000,
   showCursor: false,
   });

 });