//Wow.js
new WOW().init();

//Screen Width
var screenWidth = $(window).width();

//Burger
function openburger() {
    document.getElementById('burger').style.width = "250px";
    document.getElementById('close').classList.add('rotate');
    document.body.classList.add('mask');
};
function closeburger() {
    document.getElementById('burger').style.width = "0";
    document.getElementById('close').classList.remove('rotate');
    document.body.classList.remove('mask');
};

//To-up
function to_up() {
    $('html, body').animate({scrollTop:0}, '300');
}

//On scroll show or hide to-up
window.onscroll = function showToUp() {
    var btnToUp = document.getElementById('to-up'); 

    if (window.scrollY < 700){
        btnToUp.style.opacity = "0";
    }
    else if (window.scrollY > 700){
        btnToUp.style.opacity = "1";
    }
}

//Pop-Up
if(screenWidth >= 650) {
    $(document).ready(function() {
        $('.galery__img').on("click", function(){
            let src = $(this).prop('src');
            let popUpSrc =  $('#img').prop('src',src);
            //let count =  window.innerWidth-$(document).width();
            //$('body').addClass('bg').css({"margin-right":-count,"transform":"translateX("+-count+"px)"});
            $('body').css({"overflow": "hidden"});
            $('.pop-up').fadeIn(300);
            $('.pop-up').css({"display": "flex"});
            $('.pop-up').addClass('mask');
        });
        $('.pop-up').on("click", function(){
            $('.pop-up').fadeOut(300);
            $('body').removeClass('mask');//.css({"margin-right":'0',"transform":"translateX(0px)"});
            $('body').css({"overflow": ""});
        });
    });
};

//Load More
$(document).ready(function() {
    $('.galery__item, .events__block').slice(0, 6).show();
    $('#load-more').on('click', function(){
        $('.galery__item:hidden, .events__block:hidden').slice(0, 6).show();
    });
});

