//Wow.js
new WOW().init();

//Screen-Width
var screenWidth = $(window).width();

//To-up
function to_up() {
    $('html, body').animate({scrollTop:0}, '300');
}

//On scroll show or hide to-up
var heightContent = $('.all-content').height();
var scrollH = heightContent - 100;
var btnToUp = document.getElementById('to-up'); 

window.onscroll = function showToUp() {
    if(screenWidth <= 1160){
        if (window.scrollY > scrollH || window.scrollY < 700){
            btnToUp.style.opacity = "0";
        }
        else if (window.scrollY > 700){
            btnToUp.style.opacity = "1";
        }
    } else {
        if (window.scrollY < 700){
            btnToUp.style.opacity = "0";
        }
        else if (window.scrollY > 700){
            btnToUp.style.opacity = "1";
        }
    }
}

//Burger
function openburger() {
    document.getElementById('burger').style.width = "250px";
    document.getElementById('close').classList.add('rotate');
    document.body.classList.add('mask');
}
function closeburger() {
    document.getElementById('burger').style.width = "0";
    document.getElementById('close').classList.remove('rotate');
    document.body.classList.remove('mask');
}    

//Accordion
$(document).ready(function(){
    $('.question__button').on("click", function(){
        var panel = this.nextElementSibling;
        $(this).toggleClass('show__answer');
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + "px";
        }   
    });
});

//Carousel
let nextIcon = '<svg version="1.1" id="Layer_1" fill="rgba(45,75,165,1)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333z"/><path d="M228.418,134.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L289.83,256l-91.582,91.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17L228.418,134.248z"/></g></g></g><g></g><g></g><g></g><g></g><g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g></svg>';
let prevIcon = '<svg version="1.1" id="Layer_1" fill="rgba(45,75,165,1)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333z"/><path d="M313.752,134.248c-8.331-8.331-21.839-8.331-30.17,0L176.915,240.915c-8.331,8.331-8.331,21.839,0,30.17l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L222.17,256l91.582-91.582C322.083,156.087,322.083,142.58,313.752,134.248z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g></g><g></g><g></g></svg>';

if(screenWidth <= 575){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:1,
            mouseDrag:true,
            nav:true,
            dots:false,
            navElement: 'div',
            navText:[
            prevIcon,
            nextIcon
            ]
        });
    });
}else if(screenWidth <= 768){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:2,
            mouseDrag:true,
            nav:true,
            dots:false,
            navElement: 'div',
            navText:[
            prevIcon,
            nextIcon
            ]
        });
    });
}else{
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:3,
            mouseDrag:false,
            nav:true,
            dots:false,
            navElement: 'div',
            navText:[
            prevIcon,
            nextIcon
            ]
        });
    });
}

//Video 
$(document).ready(function(){
    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
    });
});






