"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function useGsapTextSplit() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      // Split en caractères
      const split = new SplitText(textRef.current, { type: "chars" });

      // Animation GSAP
      gsap.from(split.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power3.out",
      });

      return () => {
        split.revert(); // restaure le texte normal
      };
    },
    { scope: textRef }
  );

  return textRef;
}

type Direction = "up" | "down" | "left" | "right";

export function useGsapFade(direction: Direction = "up") {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      if (!ref.current) return;

      // définir la position de départ selon la direction
      const distance = 100;
      const fromVars: Record<string, number> = {};

      switch (direction) {
        case "up":
          fromVars.y = distance;
          break;
        case "down":
          fromVars.y = -distance;
          break;
        case "left":
          fromVars.x = distance;
          break;
        case "right":
          fromVars.x = -distance;
          break;
      }

      gsap.from(ref.current, {
        ...fromVars,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.refresh();
    },
    { dependencies: [pathname], scope: ref }
  );

  return ref;
}
