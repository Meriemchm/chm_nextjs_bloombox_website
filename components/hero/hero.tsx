"use client";
import Image from "next/image";
import Button from "../ui/button";
import { useGsapFade } from "@/hooks/gsap-animations";

export const Hero = () => {
  const fadeRef = useGsapFade("up");
  return (
    <>
      <div ref={fadeRef} className="relative z-40 flex flex-col items-center justify-center text-center gap-6 md:gap-8 py-20 max-w-sm mx-auto">
        <h2 className="pinyon-script-regular md:text-5xl text-4xl">
          Fresh Flowers, Delivered Monthly
        </h2>
        <p>
          Brighten your home with hand-picked, seasonal blooms delivered to your
          door.
        </p>
        <Button className="text-fourthary border border-fourthary px-10 bg-primary">
          Subscribe Now
        </Button>
      </div>

      <Image
        src="/Images/flower-hero.png"
        alt="flower-hero"
        width={500}
        height={500}
        className="absolute right-0  md:-top-25 top-45 z-0 w-72 h-auto  md:w-[500px]"
      />
    </>
  );
};
