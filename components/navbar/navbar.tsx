"use client";

import { NavbarItems } from "../data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "../ui/container";

const Navbar = () => {
  const [open, isOpen] = useState(false);

  return (
    <div className="bg-primary w-full fixed z-50 ">
      <Container>
        {/*Desktop*/}
        <div className="hidden md:flex w-full h-20 text-black justify-between  items-center ">
          {/*Image*/}

          <Link href={"/"}>
            <p className="text-5xl pinyon-script-regular">BloomBox</p>
          </Link>

          {/*NavItems*/}
          <div className="flex items-center gap-8 ">
            {NavbarItems.map((item, index) => (
              <div key={index} className="flex items-center gap-6 capitalize">
                <Link
                  href={item.link}
                  className="hover:text-fourthary transition"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/*Mobile*/}
        <div className="md:hidden flex w-full h-20  text-black justify-between  items-center ">
          {/*Image*/}
          <Link href={"/"}>
            <p className="text-4xl pinyon-script-regular">BloomBox</p>
          </Link>
          {/*Hamburger Icon*/}
          <div
            className="text-3xl cursor-pointer"
            onClick={() => isOpen(!open)}
          >
            <Image
              src={open ? "/Icons/times.svg" : "/Icons/bars.svg"}
              alt="logo"
              width={28}
              height={28}
              className="object-contain"
            />{" "}
          </div>
        </div>

        {/*Mobile Menu*/}

        {open && (
          <div className="h-screen bg-primary text-black flex flex-col items-center justify-center gap-8 pb-34">
            {/*NavItems*/}
            {NavbarItems.map((item, index) => (
              <div key={index} className="flex items-center capitalize text-xl">
                <Link
                  href={item.link}
                  className="hover:text-fourthary transition"
                  onClick={() => isOpen(!open)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
