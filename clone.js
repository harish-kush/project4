function init(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}
let cursor = document.querySelector(".cursor")
document.querySelector(".main").addEventListener("mousemove",function(gets){
    gsap.to(cursor,{
        left : gets.x,
        top : gets.y
    })
})
document.querySelector(".main").addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale : 1,
        opacity : 1,
        
    })
})
document.querySelector(".main").addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale : 0,
        opacity : 0
    })
})

init()
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1",{
    x: -100, 
},"hk")
tl.to(".page1 h2",{
    x: 100, 
},"hk")   // dono same time pr execute honge
tl.to(".page1 video",{
    width: "90%"
},"hk")

var tl2 = gsap.timeline({
    scrollTrigger : {
        trigger : ".page1 h1" ,
        scroller : ".main",
        start : "top : -10%" ,
        end : "top : -120%",
        scrub : 3,
        
    }
})
tl2.to(".main",{
    backgroundColor: "#fff"
})
tl2.to(".page1 h1",{
    color : "black",
},"mc")
tl2.to(".page1 h2",{
    color : "black",
},"mc")

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})
tl3.to(".main",{
    backgroundColor : "#0F0D0D" 
})