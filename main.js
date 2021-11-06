document.addEventListener("DOMContentLoaded", () => {

    let buttonToStart = document.getElementById('buttonToStart');
    
    buttonToStart.addEventListener('click', function (){
        var tl = gsap.timeline({repeat: 0});
        tl.to("#leftCol", {duration: 0.7, x: '-100%', ease: "pover1.InOut"}, "+=0.0")
        .to("#header", {duration: 1, y: -30, opacity: 0, ease: "pover1.InOut"}, "-=0.7")
        .to("#buttonToStart", {duration: 1, y: -30, opacity: 0, ease: "pover1.InOut"}, "-=0.9")
        .set("#leftCol", {css:{backgroundImage:'none'}})
        .set(".cakeImage", {css:{display:'block'}})
        .set(".selectToCart", {css:{display:'block'}})
        .set(["#header","#buttonToStart"], {css:{display:'none'}})
        .to("#leftCol", {duration: 0.7, x: '0%', ease: "pover1.InOut"}, "+=0.0")
        .from(".selectToCart", {duration: 1, y: -30, opacity: 0, ease: "pover1.InOut"}, "-=0.7");

    })

    //set the cake part
    //I will make auto generation of data base tables
    let cakeArray = [];
    for(let i=0;i<3;i++){
        cakeArray.push({id: i, nameText:'cake'+(i+1), imgUrl: 'assets/cakes/cake'+(i+1)+'.jpg', description:'description of cake num'+i})
    }
    let topingArray = [];
    for(let i=0;i<11;i++){
        topingArray.push({id: i, nameText:'toping'+(i+1), imgUrl: 'assets/cakes/top'+(i+1)+'.jpg',  description:'description of toping num'+i})
    }
    console.log(cakeArray);
    console.log(topingArray);

});