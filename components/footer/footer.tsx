import React from "react";
import { Container } from "../ui/container";

const Footer = () => {
  return (
    <div className="max-h-screen py-16 bg-black-shade flex md:flex-row flex-col gap-2 justify-between items-center md:px-12 px-4 text-white">
      <p className="md:text-base text-sm">
        © {new Date().getFullYear()} BloomBox. All rights reserved.
      </p>
      <p className="md:text-base text-sm">Privacy Policy | Terms of Service</p>
    </div>
  );
};

export default Footer;
