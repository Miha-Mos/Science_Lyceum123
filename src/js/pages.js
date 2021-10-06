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

var screen = $(window).width();

if(screen >= 650) {
    $(document).ready(function() {
        $('.galery__img').on("click", function(){
            let src = $(this).prop('src');
            let popUpSrc =  $('#img').prop('src',src);
            // let id = $(this).attr('src');
            // var img = document.getElementById('img');
            // img.setAttribute('src', id);
            //let count =  window.innerWidth-$(document).width();
            //$('body').addClass('bg').css({"margin-right":-count,"transform":"translateX("+-count+"px)"});
            $('body').css({"overflow": "hidden"});
            $('.pop-up').fadeIn(300);
            $('.pop-up').css({"display": "flex"});
            $('.pop-up').addClass('mask');
        });
        $('.pop-up').on("click", function(){
            $('.pop-up').fadeOut(300);
            $('.pop-up').removeClass('mask');//.css({"margin-right":'0',"transform":"translateX(0px)"});
            $('body').css({"overflow": ""});
        });
    });
};

new WOW().init();




