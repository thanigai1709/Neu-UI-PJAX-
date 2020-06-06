function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 1.2,
    width: "100%",
    left: "0",
    ease: "Expo.easeOut"
  });

  tl.to(".loading-screen", {
    duration: 0.8,
    width: "0%",
    left: "100%",
    ease: "Expo.easeOut",
    delay: 0.2
  });

  tl.to(".loading-screen", { left: "-100%" });
}

$(function() {
  barba.init({
    sync: true,
    transitions: [
      {
        async leave(data) {
          const done = this.async();
          pageTransition();
          await delay(1000);
          done();
        }
      }
    ]
  });
});
