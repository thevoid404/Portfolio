import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsapPlugins(): void {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function refreshScrollTrigger(): void {
  if (typeof window === "undefined") return;
  registerGsapPlugins();
  ScrollTrigger.refresh();
}

if (typeof window !== "undefined") {
  registerGsapPlugins();
}

export { gsap, ScrollTrigger };
