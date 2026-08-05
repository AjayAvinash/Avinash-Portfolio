import { gsap } from './index';

/**
 * Reusable animation helper functions stub for future scroll and entrance animations.
 */
export const animateFadeUp = (
  target: string | HTMLElement | Element[],
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    target,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      ...options,
    }
  );
};

export const animateStagger = (
  targets: string | HTMLElement[] | Element[],
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 15 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      ...options,
    }
  );
};
