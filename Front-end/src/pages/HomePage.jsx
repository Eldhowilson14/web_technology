import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import React from "react";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
    </>
  );
};
