document.addEventListener("DOMContentLoaded", () => {

    let buttonToStart = document.getElementById('buttonToStart');
    
    buttonToStart.addEventListener('click', function (){
        var tl = gsap.timeline({repeat: 0});
        tl.to("#leftCol", {duration: 0.7, x: '-100%', ease: "pover1.InOut"}, "+=0.0")
        .to("#header", {duration: 1, y: -30, opacity: 0, ease: "pover1.InOut"}, "-=0.7")
        .to("#buttonToStart", {duration: 1, y: -30, opacity: 0, ease: "pover1.InOut"}, "-=0.9")
        .set("#leftCol", {css:{backgroundImage:'none'}})
        .set(".cakeImage", {css:{display:'block'}})
        .to("#leftCol", {duration: 0.7, x: '0%', ease: "pover1.InOut"}, "+=0.0");

    })

});