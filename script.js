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