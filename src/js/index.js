function openburger() {
    document.getElementById('burger').style.width = "250px";
    document.getElementById('close').classList.add('rotate');
    document.body.classList.add('burger__bg');
};
function closeburger() {
    document.getElementById('burger').style.width = "0";
    document.getElementById('close').classList.remove('rotate');
    document.body.classList.remove('burger__bg');
}
function to_up() {
    $('html, body').animate({scrollTop:0}, '300');
}