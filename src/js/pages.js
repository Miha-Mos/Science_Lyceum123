function openburger() {
    document.getElementById('burger').style.width = "250px";
    document.getElementById('close').classList.add('rotate');
    document.body.classList.add('bg');
};
function closeburger() {
    document.getElementById('burger').style.width = "0";
    document.getElementById('close').classList.remove('rotate');
    document.body.classList.remove('bg');
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
            $('body').addClass('bg');
            $('.pop-up').addClass('show');
        });
        $('.pop-up').on("click", function(){
            $('body').removeClass('bg')//.css({"margin-right":'0',"transform":"translateX(0px)"});
            $('.pop-up').removeClass('show');
        });
    });
};




