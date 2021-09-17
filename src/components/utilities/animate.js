import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Animate text 
export const textIntro = elem => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    scale: -1,
    ease: "back",
  });
};
