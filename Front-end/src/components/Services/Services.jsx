import React from "react";
import ServicesCard from "./ServicesCard";
import { Star } from "lucide-react";

const Services = () => {
  const products = [
    {
      id: 1,
      name: "Alumini Friends",
      description:
        "Rediscover classmates, build your professional network, and find mentors within our vast alumni database",
      slug: "/alumini",
      imageSrc:
        "https://media.istockphoto.com/id/1435083908/photo/she-achieved-what-she-wanted-to-achieve.webp?b=1&s=170667a&w=0&k=20&c=6DUlPFKW8en4Ep1JJdm68CZY1FwCCJ9_yX1Nczgn49Y=",
      imageAlt: "Alumini",
      buttonText: "View Alumini",
    },
    {
      id: 2,
      name: "Events/News",
      description:
        "Discover upcoming reunions, career workshops, industry news, and inspiring alumni success stories",
      slug: "/events",
      imageSrc:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Events/News",
      buttonText: "View News/Events",
    },
    {
      id: 3,
      name: "Achievements",
      description:
        "Showcase your accomplishments, honor your peers, achievements within our alumni network.",
      slug: "/achievements",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661411073939-e7207087fa75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFjaGlldmVtZW50fGVufDB8fDB8fHww",
      imageAlt: "Achievements",
      buttonText: "View Achievements",
    },

    {
      id: 4,
      name: "Job Board/Career Services",
      description:
        "Find exclusive job postings from alumni-owned businesses,and  advance your professional journey",
      slug: "/career",
      imageSrc:
        "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9ifGVufDB8fDB8fHww",
      imageAlt: "Job Board/Career Services",
      buttonText: "View Job Board/Career Services",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=""></div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((service) => (
            <ServicesCard service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
