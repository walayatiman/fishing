import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const menuHeader = document.querySelectorAll("#header menu li");

gsap.registerPlugin(ScrollTrigger);

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
gsap.fromTo(
  "#header .container picture",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 20, delay: 1 }
);

gsap.fromTo(
  menuHeader,
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, stagger: 0.3, delay: 1.4 }
);
