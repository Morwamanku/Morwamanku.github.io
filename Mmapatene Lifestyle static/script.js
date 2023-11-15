window.onload = function () {
    //hide the preloader
    // document.querySelector(".preloader").style.display = "none";
    const tl = new TimelineMax({ delay: 3 })
      .to(".logo-splash", 0.4, {
        opacity: 0,
        delay: 0.4,
      })
      .to(".preloader", 0.4, {
        //opacity: "0",
        pointerEvents: "none",
        height: 0,
      });

      gsap.from('.logo-img',{opacity:0, stagger:.5},'<1.5')
      gsap.from('.menu-btn',{opacity:0,stagger:.5},'<1.5')

      gsap.registerPlugin(ScrollTrigger);

    gsap.from('.img1',{
      x:'-100%',
      duration:3,
      ease: 'bounce.out',
      scrollTrigger:'.section1'
    })

    

      gsap.from('.section-booking',{x:'-100%',delay:3,duration:5,ease: 'power4.out'})
};


    


