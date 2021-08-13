/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

//console.log("JavaScript is amazing!");


//This is a function I created with my brother for a side-project a few months back. I thought it might spice things up a bit here too.
function map(value, in_min, in_max, out_min, out_max) {
    return (value / (in_max - in_min)) * (out_max - out_min) + out_min;
}

function rotate(event) {

    const rotCard = document.getElementById("card");
    var cardWidth = rotCard.offsetWidth;
    var cardHeight = rotCard.offsetHeight;
    const mouseX = event.clientX - event.target.offsetLeft;
    const mouseY = event.clientY - event.target.offsetTop;
    const rotationX = map(mouseY, 0, cardWidth, -5, 5);
    const rotationY = map(mouseX, 0, cardHeight, 5, -5);
    const rotateStyle = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1.1)`;
    card.style.transform = rotateStyle;
}

function rotateReturn(event){
    const rotateStyle = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    card.style.transform = rotateStyle;
}

let card;
let stylesheet;

console.log(navigator.userAgent)
//Only adds these functions to DOM if device is not detected to be mobile
if( !(/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini|MSIE/i.test(navigator.userAgent) )) {
    window.addEventListener("DOMContentLoaded", () => {


        stylesheet = document.getElementById("card-stylesheet").sheet;
        stylesheet.insertRule('.card:hover{box-shadow: 0px 30px 15px -15px #60606060;}', 0);


        card = document.getElementById("card");
        card.addEventListener("mousemove", rotate);
        card.addEventListener("mouseout", rotateReturn);
    });
}