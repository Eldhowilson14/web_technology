import React from "react";
import { ArrowUp, Laugh, Smartphone, UsersRound } from "lucide-react";
import bgImage from "@/assets/image/main_photo.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-[100vh] max-[480px]:h-full bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
        <div className="relative text-center" data-aos="fade-up">
          <div
            className="flex flex-row justify-center "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="md:w-1/2 lg:w-2/3 text-white">
              <h1
                className="text-6xl max-[767px]:mt-8 max-[767px]:text-4xl font-bold "
                data-aos="fade-up"
              >
                your bridge to the Network
              </h1>
              <h2 className="ml-3 text-2xl max-[480px]:text-xl mt-3">
                InfoSystem connects you to experienced professionals,
                unlocking career possibilities.
              </h2>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Hero;
