"use client";
import Image from "next/image";
import { HowItWorksItems } from "../data/data";
import { useGsapFade } from "@/hooks/gsap-animations";

export const HowItWorks = () => {
  const fadeRef_1 = useGsapFade("up");
  const fadeRef_2 = useGsapFade("up");
  return (
    <div className="flex flex-col justify-center items-center">
      <div ref={fadeRef_1}>
        <p className="pinyon-script-regular md:text-7xl text-6xl pb-20 ">
          How it works
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-6 md:gap-16 ">
        {
          /* Add your content here */

          HowItWorksItems.map((item, index) => (
            <div
              key={index}
              ref={(el) =>  fadeRef_2(el,index)}
              className="flex justify-center items-center flex-col mt-10 "
            >
              <Image
                src={item.icon}
                alt="flower-hero"
                width={100}
                height={100}
                className=" "
              />
              <p className="md:text-xl text-base font-semibold py-4">
                {item.title}
              </p>
              <p className="mt-2 md:text-base text-sm text-center max-w-xs">
                {item.description}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
};
