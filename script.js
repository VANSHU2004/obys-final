function loaderAnimation(){
    var tl = gsap.timeline()

tl.from(".line h1",{
    y: "150%",
    duration:0.7,
    stagger:0.2,
    delay:0.5
});

tl.from('#line1-part1',{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;

        let timer = setInterval(function(){
        grow += 1;
        h5timer.innerHTML = grow;
        if(grow >= 100){
        clearInterval(timer);
        }

        },35);
    }
});
tl.to('.line h2',{
    animationName:'anime',
    opacity:1
})

tl.to('#loader',{
    opacity:0,
    display:'none',
    duration:0.2,
    delay:3.3
}); 

tl.from('#page1',{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:Power4,
    duration:0.6
});
tl.from('#nav',{
    opacity:0,
})

tl.from('#hero1 h1 , #hero2 h1 , #hero3 h2 , #hero4 h1', {
    y:120,
    stagger:0.2,
})
}
function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
    gsap.to('#crsr',{
        left:dets.x,
        top:dets.y

    })

})

Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
  //Parameters are optional.
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
});
}
loaderAnimation();
cursorAnimation();






