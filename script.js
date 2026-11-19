let gs = gsap.timeline()

gs.from("nav", {
  y: -60,
  opacity: 0,
  ease: "power3.out",
  duration: 1
})

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "h1",
    start: "top 20%",
    scrub: 2,


  }
});

tl.to(".middle", {
  width: "500px",
  ease: "power3.out"




})
  .to(".left", {
    x: -100,
    ease: "power3.out"

  }, "<")
  .to(".right", {
    x: 100,
    ease: "power3.out"

  }, "<");

gs.from(".section1", {
  y: 120,
  opacity: 0,
  ease: "power3.out",
  duration: 1.5

})

gsap.from(".section4 h1", {
  y: 70,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".section4 h1",
    start: "top 80%",
    scrub: 2,



  }
})

gsap.to(".one", {
  width: "100%",

  ease: "power3.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".one",
    start: "top 70%",
    scrub: 5,



  }
})

gsap.from(".section5 img", {
  y: 40,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".section5 img",
    start: "top 60%",





  }
})


gsap.from(".about h1", {
  y: 70,
  opacity: 0,
  duration: 1.9,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about h1",
    start: "top 60%",





  }
})

gsap.to(".xyz", {
  scale:12,

  ease: "power3.out",
  scrollTrigger: {
    trigger: ".xyz",
    start: "top 80%",
   
    scrub: 3,
    pin:true





  }
})


gsap.from("footer h1",{
  y:70,
  rotate:-60,
  ease: "power3.out",
  duration:1.5,
  opacity:0,

   scrollTrigger: {
    trigger: ".footer h1",
    start: "top 60%",
    
   
    





  }

})



var cursor=document.querySelector(".gsap")


document.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.clientX,
        y:dets.clientY,
        duration:0.7,
        ease:"power3.out"
    
    })
})






document.querySelectorAll(".pro1").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = 
     `<img src="./images/snack.png" style="width:200%; height:100%;  object-fit:cover;border-radius:5px">`;

     gsap.to(".gsap",{
        scale:7,
       
        borderRadius:"0%",
        border:"0px",
        duration:0.3,
        ease:"power3.out"

     })
  })

  el.addEventListener("mouseleave",function(){

    document.querySelector(".gsap").innerHTML = "";
     gsap.to(".gsap",{
        scale:1,
        borderRadius:"50%",
        border:"2px solid white",
        backgroundColor:"white",
        borderColor:"white",
        duration:0.3
     })
  })

})


document.querySelectorAll(".pro2").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = 
     `<img src="./images/tala.png" style="width:200%; height:100%;  object-fit:cover;border-radius:5px">`;

     gsap.to(".gsap",{
        scale:7,
       
        borderRadius:"0%",
        border:"0px",
        duration:0.3,
        ease:"power3.out"

     })
  })

  el.addEventListener("mouseleave",function(){

    document.querySelector(".gsap").innerHTML = "";
     gsap.to(".gsap",{
        scale:1,
        borderRadius:"50%",
        border:"2px solid white",
        backgroundColor:"white",
        borderColor:"white",
        duration:0.3
     })
  })

})
