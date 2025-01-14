// Swiper 7.4.1
// import './vendor/swiper';
import './vendor/focus-visible-polyfill';
import {gsap} from './vendor/gsap.min.js';
import {ScrollTrigger} from './vendor/scroll-trigger.min.js';
import {ScrollSmoother} from './vendor/scroll-smoother.min.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
