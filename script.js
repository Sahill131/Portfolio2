const siteLoader = document.querySelector(".site-loader");

const playIntroAnimations = () => {
  const intro = gsap.timeline();

  intro.from("nav", {
    y: -60,
    opacity: 0,
    ease: "power3.out",
    duration: 1
  }).from(".section1", {
    y: 120,
    opacity: 0,
    ease: "power3.out",
    duration: 1.5
  });
};


if (siteLoader) {
  const loaderProgress = siteLoader.querySelector(".loader-progress");
  const loaderPercent = siteLoader.querySelector(".loader-percent");
  const loaderStartedAt = Date.now();
  let progressValue = 0;

  const updateLoaderProgress = () => {
    loaderProgress.style.width = `${progressValue}%`;
    loaderPercent.textContent = `${String(progressValue).padStart(2, "0")}%`;
  };

  const progressTimer = window.setInterval(() => {
    progressValue = Math.min(progressValue + (progressValue < 70 ? 2 : 1), 92);
    updateLoaderProgress();
  }, 55);

  let loaderFinished = false;
  const finishLoader = () => {
    if (loaderFinished) return;
    loaderFinished = true;
    const remainingDisplayTime = Math.max(0, 2600 - (Date.now() - loaderStartedAt));

    window.setTimeout(() => {
      window.clearInterval(progressTimer);
      progressValue = 100;
      updateLoaderProgress();
      window.setTimeout(() => {
        const onLoaderFade = (event) => {
          if (event.target !== siteLoader || event.propertyName !== "opacity") return;
          siteLoader.removeEventListener("transitionend", onLoaderFade);
          playIntroAnimations();
        };

        siteLoader.addEventListener("transitionend", onLoaderFade);
        siteLoader.classList.add("is-hidden");
      }, 650);
    }, remainingDisplayTime);
  };

  window.addEventListener("load", finishLoader, { once: true });

  if (document.readyState === "complete") {
    finishLoader();
  }
} else {
  playIntroAnimations();
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const lenis = new Lenis({ autoRaf: false });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

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
        border:"2px solid #FC626A",
        backgroundColor:"#FC626A",
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
         border:"2px solid #FC626A",
        backgroundColor:"#FC626A",
        borderColor:"white",
        duration:0.3
     })
  })

})


document.querySelectorAll(".pro3").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = 
     `<img src="./images/ba.png" style="width:200%; height:100%;  object-fit:cover;border-radius:5px">`;

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
        border:"2px solid #FC626A",
        backgroundColor:"#FC626A",
        borderColor:"white",
        duration:0.3
     })
  })

})



document.querySelectorAll(".pro4").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = 
     `<img src="./images/kickflex.png" style="width:200%; height:100%;  object-fit:cover;border-radius:5px">`;

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
        border:"2px solid #FC626A",
        backgroundColor:"#FC626A",
        borderColor:"white",
        duration:0.3
     })
  })

})



document.querySelectorAll(".pro5").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = 
     `<img src="./images/restaurant.png" style="width:200%; height:100%;  object-fit:cover;border-radius:5px">`;

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
         border:"2px solid #FC626A",
        backgroundColor:"#FC626A",
        borderColor:"white",
        duration:0.3
     })
  })

})



document.querySelectorAll(".pro6").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = 
     `<img src="./images/travel.png" style="width:200%; height:100%;  object-fit:cover;border-radius:5px">`;

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
        border:"2px solid #FC626A",
        backgroundColor:"#FC626A",
        borderColor:"white",
        duration:0.3
     })
  })

})
