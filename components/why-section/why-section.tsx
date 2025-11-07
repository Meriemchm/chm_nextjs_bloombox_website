'use client';
import Image from "next/image";
import { useGsapFade } from "@/hooks/gsap-animations";

export const WhySection = () => {
  const fadeLeftRef = useGsapFade("left");
  const fadeRightRef = useGsapFade("right");
  return (
    <div className="flex md:flex-row flex-col justify-center md:justify-evenly items-center gap-4 mx-auto">
      <div
        ref={fadeLeftRef}
        className="flex flex-col justify-center items-start max-w-xl "
      >
        <h2 className="pinyon-script-regular md:text-6xl text-5xl text-start my-10">
          Why BloomBox?
        </h2>
        <div className=" text-start text-lg md:text-xl">
          <p className="mb-6">
            We believe fresh flowers make everyday life more beautiful. Our
            mission is to make it easy and affordable for everyone to enjoy
            stunning blooms without the hassle.
          </p>
        </div>
      </div>
      <div ref={fadeRightRef}>
        <Image
          src="/Images/flowers.png"
          alt="flower-hero"
          width={400}
          height={400}
          className="w-72 md:w-96 h-auto"
        />
      </div>
    </div>
  );
};
