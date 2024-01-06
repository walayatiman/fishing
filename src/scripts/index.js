import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
window.onload = function () {
  console.log("HELLLO");
};

gsap.to(".first", {
  delay: 0.2,
  left: "-100%",
  ease: "expo.inOut",
});

gsap.to(".second", {
  delay: 0.4,
  left: "-100%",
  ease: "expo.inOut",
});

gsap.to(".third", {
  delay: 0.6,
  left: "-100%",
  ease: "expo.inOut",
});
