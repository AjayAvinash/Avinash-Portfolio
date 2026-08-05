import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const initGsap = () => {
  if (typeof window !== 'undefined') {
    gsap.config({
      nullTargetWarn: false,
    });
    gsap.registerPlugin(ScrollTrigger);
  }
};

export { gsap, ScrollTrigger };
