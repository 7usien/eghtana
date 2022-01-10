let cart = document.querySelector('.cart');
let subcart = document.querySelector('.subCart');


cart.addEventListener('click', (e) => {

    subcart.style.display = "block";



});

subcart.addEventListener('mouseleave', (e) => {

    subcart.style.display = "none";



});


cart.addEventListener('mouseleave', (e) => {

    subcart.style.display = "none";



});





let profileHandler = document.querySelector('li.welcome');
let signInDown = document.querySelector('.signInDown');

profileHandler.addEventListener('click', () => {
    signInDown.style.display = "block";

});






signInDown.addEventListener('mouseleave', () => {
    signInDown.style.display = "none";
});